import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

const Movies = (props) => {
    let movieList = props.movies.map(movie => {
        return (
            <Fragment>
                <ul className="list-group-item d-flex justify-content-between">
                    <li>{movie.title}</li>
                    <li>{movie.director}</li>
                    <li>{movie.year}</li>
                    <li>{movie.rating}</li>
                    <div>
                        <button onClick={props.deleteMovie} id={movie.id}>Delete Movie</button>
                        <Link to={`/update/${movie.id}`}><button id={movie.id} onClick={props.getIdForUpdate}>Edit</button></Link>
                    </div>
                </ul>
            </Fragment>
        )
    })
    return (
        <Fragment>
            <Header />
                <ul className="list-group-item d-flex justify-content-between">
                    <li id="descriptions">Title</li>
                    <li id="descriptions">Director</li>
                    <li id="descriptions">Year</li>
                    <li id="descriptions">Rating</li>
                    <li id="descriptions">Edit/Delete</li>
                </ul>
            { movieList }
        </Fragment>
    )
}

export default Movies