import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"

const UpdateMovie = (props) => {
    var [movies] = props.movies.filter(movie => {
        return (movie.id == props.movieSelected)})
    return (
        <Fragment>
            <Header />
            <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" defaultValue={movies.title} name="title" onChange={props.handleInput} required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label>Director</label>
                    <input type="text" className="form-control" defaultValue={movies.director} name="director" onChange={props.handleInput} required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label>Year</label>
                    <input type="text" className="form-control" defaultValue={movies.year} name="year" onChange={props.handleInput} required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationServer02">Rating</label>
                    <input type="text" className="form-control" defaultValue={movies.rating} name="rating" onChange={props.handleInput} required></input>
                </div>
                <button type="button" class="btn btn-info" onClick={props.updateMovie}>
                    Update Movie
                </button>
                <Link to="/movies"><button type="button" class="btn btn-info" >
                    Back to Movies List
                </button></Link>  
            </div>
        </form>
        </Fragment>
    )
}

export default UpdateMovie