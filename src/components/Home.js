import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    return (
        <Fragment>
        <Header />
        <div className="homeBackground">
        <h1>Bethany's Movie Ratings</h1>
        </div>
        </Fragment>
    )
}

export default Home