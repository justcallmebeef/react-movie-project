import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <nav>
            <ul class="topnav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Header