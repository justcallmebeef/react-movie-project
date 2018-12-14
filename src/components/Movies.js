import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Movies = (props) => {
    let movieList = props.movies.map(movie => {
        return (
            <Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>{movie.title}</p><p>{movie.director}</p><p>{movie.year}</p><p>{movie.rating}</p><p><button onClick={props.deleteMovie} id={movie.id}>Delete Movie</button></p>
                    <Link to={`/update/${movie.id}`}><p><button id={movie.id} onClick={props.getIdForUpdate}>Edit</button></p></Link>
                    </li>
                </ul>
            </Fragment>
        )
    })
    return (
        <Fragment>
            <Header />
            <div className='movieBackground'>
            <ul className="list-group">
                    <li id="descriptions" className="list-group-item d-flex justify-content-between align-items-center">
                        <p>Title</p><p>Director</p><p>Year</p><p>Rating</p><p>Edit/Delete</p>
                    </li>
                </ul>
            { movieList }
            </div>
        </Fragment>
    )
}

export default Movies