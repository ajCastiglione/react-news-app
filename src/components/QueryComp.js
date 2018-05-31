import React, { Component } from 'react';
import * as fetchNews from '../requests/fetchNews';

export default class Query extends Component {

    state = {
        term: sessionStorage.queryTerm === undefined ? this.props.search : sessionStorage.queryTerm,
    }

    componentDidMount() {
        console.log(fetchNews.getQuery(this.state.term).then(data => console.log(data)));
    }

    render() {
        return (
            <section className="query-component-contanier">
                
                <div className="query-fetched-results">
                    <h1>Results:</h1>
                    <p>(shown in console)</p>
                </div>

            </section>
        )
    }
}