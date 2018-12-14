import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-dark bg-dark justify-content-between'>
                <Link to='/'><a className="navbar-brand">Home</a></Link>
                <div>
                <Link to='/movies'><a className="navbar-brand">Movies</a></Link>
                <Link to='/create'><a className="navbar-brand">Add Movie</a></Link>
                </div>
        </nav>
    )
}

export default Header