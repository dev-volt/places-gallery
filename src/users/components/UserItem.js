import React from 'react'
import { Link } from 'react-router-dom'
import './UserItem.css'

const UserItem = (props) => {
    return (
        <Link to={`/${props.id}/places`}>
            <div className="card">
                <img className="card-img-top" src={props.image} alt={props.name} />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}</p>
                </div>
            </div>
        </Link>

    )
}

export default UserItem
