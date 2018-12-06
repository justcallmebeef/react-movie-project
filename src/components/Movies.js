import React, { Fragment } from 'react'
import Header from './Header'

const Movies = (props) => {
    let movieList = props.movies.map(movie => {
        return (
            <Fragment>
                <div>
                    <ul>
                        <li>{movie.title}</li>
                        <li>{movie.director}</li>
                        <li>{movie.year}</li>
                        <li>{movie.rating}</li>
                    </ul>
                    <button onClick={props.deleteMovie} id={movie.id}>Delete Movie</button>
                    <button>Edit</button>
                </div>
            </Fragment>
        )
    })
    return (
        <Fragment>
            <Header />
            { movieList }
        </Fragment>
    )
}

export default Movies