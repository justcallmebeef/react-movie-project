import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  render() {
    return (
      <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/movies' component={Movies}/>
      </div>
    );
  }
}

export default App;
