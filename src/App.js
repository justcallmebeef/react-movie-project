import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import NewMovie from './components/NewMovie'
import './App.css';

const movieAPI = "https://movie-db-project.herokuapp.com/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [], 
    }
  }

  async componentDidMount() {
    this.loadMovies()
  }

  loadMovies = () =>  {
    fetch(movieAPI)
    .then(response => response.json()) 
    .then(response => this.setState({movies: response}))
  }

  deleteMovie = (event) => {
    fetch(`${movieAPI}${event.target.id}`, {
      method: 'DELETE', 
    })
    .then(() => this.loadMovies())
  }

  render() {
    return (
      <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/movies' render={() => (<Movies deleteMovie={this.deleteMovie} movies={this.state.movies} />)}/>
      <Route path='/create' render={() => (<NewMovie />)} />
      </div>
    );
  }
}

export default App;
