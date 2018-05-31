import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Query from './components/QueryComp';

class App extends Component {

  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    query: '',
    warning: false
  }

  handleInput(e) {
    let { value } = e.target;
    this.setState({ query: value });
  }

  handleClick(e) {
    if(this.state.query === '') {
      e.preventDefault();
      this.setState({ warning: true });
    }
    sessionStorage.queryTerm = this.state.query;
    this.setState({ query: '' });
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
        <div className="query-input">
          <input type="text" className="form-control col-7" onChange={this.handleInput} />
          <Link to="/query" className="btn btn-primary col-4" onClick={this.handleClick}>Submit</Link>
          <p>Current input: {this.state.query === '' ? 'Nothing yet' : this.state.query } </p> 
        </div>
       )}/>

        <Route path="/query" render={() => (
          <section className="query-results-container">
            <Link to="/" className="btn btn-primary"><i className="fas fa-arrow-left"></i> Return</Link>
            <Query search={this.state.query} />
          </section>
       )}/>

      </section>

      </main>
    );
  }
}

export default App;
