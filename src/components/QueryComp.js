import React, { Component } from 'react';
import * as fetchNews from '../requests/fetchNews';

export default class Query extends Component {

    state = {
        term: sessionStorage.queryTerm === undefined ? this.props.search : sessionStorage.queryTerm,
        cat: sessionStorage.catTerm !== undefined ? sessionStorage.catTerm : this.props.category,
        results: [],
        pg: 1,
        totalPgs: '',
    }

    componentDidMount() {
        let { term, cat } = this.state;
        fetchNews.getQuery(term, cat).then(data => this.handleInfo(data))
        //sessionStorage.currentSearch = 
    }

    handleInfo = (news) => {
        console.log(news);
        this.setState({ totalPgs: news.totalResults/20, results: news.articles }, () => {console.log(this.state.results, this.state.totalPgs)});
    }

    handlePageChange = () => {

    }

    handleNewPage = () => {
        let { term, cat, pg } = this.state;
        fetchNews.getQuery(term, cat, pg).then(data => this.handleInfo(data))
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
                            <div key={index} className="query-fetched-content col-xs-12 col-sm-6 col-lg-4">

                                <div className="query-image-title">
                                    <div className="col-xs-12 col-sm-6 col-lg-4">
                                        <img src={el.urlToImage ? el.urlToImage : 'http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg'} alt={el.title ? el.title : 'Unknown'}/>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-lg-8">
                                        <h3 className="article-title">{el.title ? el.title : 'Unknown'}</h3>
                                    </div>
                                </div>

                                <h4 className="article-author">{el.author ? el.author : 'Unknown'}</h4>
                                <p className="article-content">{el.description ? el.description : 'Could not parse this info'} <a href={el.url ? el.url : 'Sorry, no url found'} target="_blank">read more</a></p>
                                <p className="article-date">{el.publishedAt}</p>
                                <h4 className="article-publisher">By: {el.source.name ? el.source.name : 'Unknown'}</h4>                              
                                
                            </div>
                            ))
                            : 
                            null
                        }

                    </section>

                </div>

            </section>
        )
    }
}