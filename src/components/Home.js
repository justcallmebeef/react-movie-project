import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
        <div className="homeBackground">
        <div className="wordButtonContainer">
        <h1 className="bmovies">Bethany's Movie Ratings</h1>
        <button className="checkOutMovies"><span id="planbutton"><Link to='/movies'>Go To Movies</Link></span></button>
        </div>
        </div>
        </Fragment>
    )
}

export default Home