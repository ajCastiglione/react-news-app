import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as fetchNews from './requests/fetchNews';

class App extends Component {
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
        <p> {fetchNews.getQuery()} </p>
        <p> {fetchNews.getEverything()} </p>
        <p> {fetchNews.getTopNews()} </p>
      </section>

      </main>
    );
  }
}

export default App;
