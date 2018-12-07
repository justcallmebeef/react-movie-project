import React, { Fragment } from 'react'
import Header from './Header'

const Movies = (props) => {
    let movieList = props.movies.map(movie => {
        return (
            <Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>{movie.title}</p><p>{movie.director}</p><p>{movie.year}</p>
                        <span className="fa fa-star">Rating: {movie.rating}</span>
                    </li>
                    <button onClick={props.deleteMovie} id={movie.id}>Delete Movie</button>
                    <button>Edit</button>
                </ul>
            </Fragment>
        )
    })
    return (
        <Fragment>
            <Header />
            <ul className="list-group">
                    <li id="descriptions" className="list-group-item d-flex justify-content-between align-items-center">
                        <p>Title</p><p>Director</p><p>Year</p>
                        <span className="fa fa-star">Rating</span>
                    </li>
                </ul>
            { movieList }
        </Fragment>
    )
}

export default Movies


{/* <div className="movieContainer">
<ul>
    <li>{movie.title}</li>
    <li>{movie.director}</li>
    <li>{movie.year}</li>
    <li>{movie.rating}</li>
</ul>

</div> */}