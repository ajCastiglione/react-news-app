import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import QuerySearch from './components/QuerySearch';
import QueryPage from './components/QueryPage';
import TopNews from './components/TopNews';

class App extends Component {

  handleGoBack = () => {
    this.setState({ category: 'none' }, () => {sessionStorage.catTerm = this.state.category; sessionStorage.currentPage = 1;});
  }

  scrollToBottom = () => {
    $('html,body').animate({
      scrollTop: $(document).height() - $(window).height()
    }, 1400);
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          
          <div className="top-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <h1 className="App-title">React News</h1>
          </div>
          
        </header>
        
      <section className="main-content">

      <Route exact path="/" render={() => (
        <article className="homepg-selection">
          <h1>Query or Top Headlines?</h1>

          <div className="btn-container">
            <Link to="/query-search" className="btn-choice">custom search</Link>
            <Link to="/top-news" className="btn-choice">top news today</Link>
          </div>

        </article>
      )}/>
       
       <Route exact path="/query-search" render={() => (
         <section className="query-search-parent">

          <div className="query-search-btns query-results-btn-container">
            <Link to="/" className="btn btn-primary" onClick={this.handleGoBack}><i className="fas fa-arrow-left"></i> Home</Link>
          </div>

          <QuerySearch/>

         </section>
       )}/> 
       {/* End of query search route */}

        <Route exact path="/query" render={() => (
          <section className="query-results-container">
            <div className="query-results-btn-container">
              <Link to="/" className="btn btn-primary" onClick={this.handleGoBack}><i className="fas fa-arrow-left"></i> Home</Link>
              <button className="btn btn-primary" onClick={this.scrollToBottom}>Bottom <i className="fas fa-arrow-down"></i></button>
            </div>
            <QueryPage />
          </section>
       )}/> 
       {/* End of query page route */}

       <Route exact path="/top-news" render={() => (
        <section className="topNews-results-container">

        <div className="topNews-results-btn-container">
          <Link to="/" className="btn btn-primary" onClick={this.handleGoBack}><i className="fas fa-arrow-left"></i> Home</Link>
          <button className="btn btn-primary" onClick={this.scrollToBottom}>Bottom <i className="fas fa-arrow-down"></i></button>
        </div>

        <TopNews />        

        </section>
       )}/>
       {/* End of top news route */}

      </section>

      </main>
    );
  }
}

export default App;
