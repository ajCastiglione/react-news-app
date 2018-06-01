import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import QueryPage from './components/QueryPage';
import * as fetchNews from './requests/fetchNews';

class App extends Component {

  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  state = {
    query: '',
    category: 'none',
    warning: false,
  }

  handleInput(e) {
    let { value } = e.target;
    this.setState({ query: value, warning: false }, () => { sessionStorage.queryTerm = this.state.query; });
  }

  handleClick(e) {
    if(this.state.query === '') {
      e.preventDefault();
    this.setState({ warning: true });
    }
    this.setState({ query: '' });
  }

  handleSelect(e) {
    let { value } = e.target
    this.setState({ category: value }, () => sessionStorage.catTerm = this.state.category);
  }

  handleGoBack() {
    this.setState({ category: 'none' }, () => sessionStorage.catTerm = this.state.category);
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          
          <div className="top-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React News</h1>
          </div>
          
        </header>
        
      <section className="main-content">
       
       <Route exact path="/" render={() => (
        <div className="query-input large-container">
          
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

       )}/> {/* End of home page route */}

        <Route exact path="/query" render={( props ) => (
          <section className="query-results-container">
            <Link to="/" className="btn btn-primary" onClick={this.handleGoBack}><i className="fas fa-arrow-left"></i> Return</Link>
            <QueryPage search={this.returnQuery} category={this.state.category} />
          </section>
       )}/> {/* End of query page route */}

      </section>

      </main>
    );
  }
}

export default App;
