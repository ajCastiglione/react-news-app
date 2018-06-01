import React, { Component } from 'react';
import * as fetchNews from '../requests/fetchNews';
import $ from 'jquery';

export default class Query extends Component {

    state = {
        term: sessionStorage.queryTerm === undefined ? this.props.search : sessionStorage.queryTerm,
        cat: sessionStorage.catTerm !== undefined ? sessionStorage.catTerm : this.props.category,
        results: sessionStorage.currentResults ? JSON.parse(sessionStorage.currentResults) : [],
        cachedResults: sessionStorage.cachedResults? JSON.parse(sessionStorage.cachedResults) : [],
        pg: sessionStorage.currentPage ? Number(sessionStorage.currentPage) : 1,
        totalPgs: sessionStorage.totalPages ? sessionStorage.totalPages : '',
    }

    componentDidMount() {
        let { term, cat } = this.state;
        if(this.state.pg !== 1) return;
        this.setState({ pg: 1 });
        fetchNews.getQuery(term, cat).then(data => this.handleInfo(data))
    }

    handleInfo = (news) => {
        let tempArr = news.articles.filter(source => source.source.name !== 'Dribbble.com');
        tempArr = tempArr.filter(source => source.source.name !== 'Bleepingcomputer.com');
        tempArr = tempArr.filter(source => source.source.name !== 'Deviantart.com');
        this.setState({ totalPgs: news.totalResults/20, results: tempArr }, () => {sessionStorage.currentResults = JSON.stringify(this.state.results); sessionStorage.totalPages = this.state.totalPgs});
    }

    handlePageChangeNext = () => {
        let { term, cat, pg } = this.state;
        this.setState({ pg: pg += 1 }, () => {sessionStorage.currentPage = this.state.pg; console.log(pg)});
        fetchNews.getQuery(term, cat, pg).then(data => this.handleInfo(data));
        $('html,body').animate({ scrollTop: 0 }, 1500);        
    }

    handlePageChangePrev = () => {
        let { term, cat, pg } = this.state;
        this.setState({ pg: pg -= 1 }, () => {sessionStorage.currentPage = this.state.pg; console.log(pg)});
        fetchNews.getQuery(term, cat, pg).then(data => this.handleInfo(data));
        $('html,body').animate({ scrollTop: 0 }, 1500); 
    }

    render() {

        return (
            <section className="query-component-contanier">
                
                <div className="query-fetched-results">
                    
                    <section className="query-fetched-header">
                        <h1>Showing results for: <strong>{this.state.term}</strong></h1>
                        <h3>{this.state.cat !== 'none' && <div>In the category: <strong>{this.state.cat}</strong></div>}</h3>
                    </section>

                    <section className="query-fetched-content-container">
                    
                        {
                            this.state.results.length !== 0 ?

                            this.state.results.map((el, index) => (
                            <div key={index} className="query-fetched-content">

                                <div className="query-image-title">
                                    <div className="col-xs-12 col-lg-4">
                                        <img src={el.urlToImage ? el.urlToImage : 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'} alt={el.title ? el.title : 'Unknown'}/>
                                    </div>
                                    <div className="col-xs-12 col-lg-8">
                                        <h3 className="article-title">{el.title ? el.title : 'Unknown'}</h3>
                                    </div>
                                </div>

                                <h4 className="article-author">{el.author ? el.author : 'Unknown'}</h4>
                                <p className="article-content">{el.description ? el.description : 'Could not parse this info'} </p>
                                <p><a className="read-more-btn" href={el.url ? el.url : 'Sorry, no url found'} target="_blank">read more</a></p>
                                <p className="article-date">{el.publishedAt}</p>
                                <h4 className="article-publisher">By: {el.source.name ? el.source.name : 'Unknown'}</h4>                              
                                
                            </div>
                            ))
                            : 
                            null
                        }

                        <div className="pagination-container">
                            <p>Showing page {this.state.pg} of {Math.round(this.state.totalPgs)}</p>
                            
                            <div className="pagination-buttons container">
                                <p className="prevBtn">{this.state.pg === 1 ? null : <button onClick={this.handlePageChangePrev}><i className="fas fa-arrow-left"></i> Previous</button>}</p>
                                <p className="nextBtn">{this.state.pg === Math.round(this.state.totalPgs) ? null : <button onClick={this.handlePageChangeNext}>Next <i className="fas fa-arrow-right"></i></button> }</p>
                            </div>
                        </div>

                    </section>

                </div>

            </section>
        )
    }
}