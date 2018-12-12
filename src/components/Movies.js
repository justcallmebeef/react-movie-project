import React, { Fragment } from 'react'
import Header from './Header'

const Movies = (props) => {
    let movieList = props.movies.map(movie => {
        return (
            <Fragment>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>{movie.title}</p><p>{movie.director}</p><p>{movie.year}</p><p>{movie.rating}</p><p><button onClick={props.deleteMovie} id={movie.id}>Delete Movie</button>
                    <button>Edit</button></p>
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


{/* <div className="movieContainer">
<ul>
    <li>{movie.title}</li>
    <li>{movie.director}</li>
    <li>{movie.year}</li>
    <li>{movie.rating}</li>
</ul>

</div> */}