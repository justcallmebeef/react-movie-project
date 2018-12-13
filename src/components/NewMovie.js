import React, { Fragment } from 'react' 
import Header from './Header'

const NewMovie = () => {
    return (
        <Fragment>
        <Header />
        <form>
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Title" required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label>Director</label>
                    <input type="text" className="form-control" placeholder="Director" required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label>Year</label>
                    <input type="text" className="form-control" placeholder="Year" required></input>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationServer02">Rating</label>
                    <input type="text" className="form-control" placeholder="Rating" required></input>
                </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
        </Fragment>
    )
}

export default NewMovie