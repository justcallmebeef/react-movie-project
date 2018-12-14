import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import NewMovie from './components/NewMovie'
import UpdateMovie from './components/UpdateMovie'
import './App.css';

const movieAPI = "https://movie-db-project.herokuapp.com/"

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieSelected: '', 
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

  handleInput = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  postMovie = () => {
    let post = {
      title: this.state.title, 
      director: this.state.director, 
      year: this.state.year, 
      rating: this.state.rating 
    }
    fetch(movieAPI, {
      method: 'POST', 
      body: JSON.stringify(post), 
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then (newMovie => newMovie.json())
    .then(this.loadMovies)
    .then(alert('You added a Movie! Add another or return to Movies List'))
  }

  getIdForUpdate = (event) => {
    this.setState({
      movieSelected: event.target.id
    })
  }

  updateMovie = () => {
    let update = {
      title: this.state.title, 
      director: this.state.director, 
      year: this.state.year, 
      rating: this.state.rating 
    }
    fetch(`${movieAPI}${this.state.movieSelected}`, {
      method: 'PUT', 
      body: JSON.stringify(update), 
      headers: {
        'Content-Type': 'application/json', 
      }
    })
    .then(updateMovie => updateMovie.json())
    .then(() => this.loadMovies())
    .then(alert('You updated the movie! Keep updating or return to Movies List'))
  }


  render() {
    return (
      <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/movies' render={() => (<Movies deleteMovie={this.deleteMovie} movies={this.state.movies} getIdForUpdate={this.getIdForUpdate}/>)}/>
      <Route path='/create' render={() => (<NewMovie postMovie={this.postMovie} handleInput={this.handleInput} />)} />
      <Route path='/update' render={() => (<UpdateMovie movies={this.state.movies} handleInput={this.handleInput} movieSelected={this.state.movieSelected} updateMovie={this.updateMovie} />)} />
      </div>
    );
  }
}

export default App;
