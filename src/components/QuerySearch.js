import React, { Component } from 'react';
import * as fetchNews from '../requests/fetchNews';
import { Link } from 'react-router-dom';


export default class QuerySearch extends Component {

    state = {
        query: '',
        category: 'none',
        warning: false,
    }

    handleInput = (e) => {
        let { value } = e.target;
        this.setState({ query: value, warning: false }, () => { sessionStorage.queryTerm = this.state.query; });
    }
    
    handleClick = (e) => {
        if(this.state.query === '') {
            e.preventDefault();
            this.setState({ warning: true });
        }
        this.setState({ query: '' });
    }

    handleSelect = (e) => {
       let { value } = e.target
       this.setState({ category: value }, () => sessionStorage.catTerm = this.state.category);
    }

    
    render() {
        return (
            <div className="query-input large-container">

            <h2 className="query-pageTitle">Search for a specific topic</h2>
          
            <div className="query-input-fields">
                <input type="text" className="form-control" placeholder="Enter search term..." onChange={this.handleInput} />
                <Link to="/query" className="btn btn-primary" onClick={this.handleClick}>Submit</Link>
            </div>

            <p className={this.state.warning ? "alert alert-warning" : null}>{this.state.warning ? 'Warning: Input can\'t be blank!' : null }</p>

            <div className="query-params-fields">
            <h2 className="query-params-title"><span>Select a category (optional)</span></h2>
                <select name="category" onChange={this.handleSelect}>
                <option value="none">None</option>
                {
                    fetchNews.cats ?
                    fetchNews.cats.map((el, index) => (                
                    <option key={index} value={el}>{el = el.charAt(0).toUpperCase() + el.substr(1)}</option>
                    ))
                    :
                    <option>No categories found</option>
                }
                </select>
            </div>

        </div>
        );
    }
}