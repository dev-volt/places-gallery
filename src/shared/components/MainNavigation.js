import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MainNavigation.css'
import { AuthContext } from '../context/auth-context'

const MainNavigation = () => {
    const auth = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" exact>Places Gallery
</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact>All Users</NavLink>
                    </li>
                    {
                        auth.isLoggedIn &&
                        <li className="nav-item">
                            <NavLink to="/1/places" className="nav-link">My Places</NavLink>
                        </li>
                    }
                    {
                        auth.isLoggedIn &&
                        <li className="nav-item">
                            <NavLink to="/places/new" className="nav-link">Add Places</NavLink>
                        </li>
                    }
                    {
                        !auth.isLoggedIn &&
                        <li className="nav-item">
                            <NavLink to="/auth" className="nav-link">Authenticate</NavLink>
                        </li>
                    }
                    {
                        auth.isLoggedIn &&
                        <li className="nav-item">
                            <button type="button" class="btn btn-danger btn-sm" onClick={auth.logout}>Logout</button>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default MainNavigation
