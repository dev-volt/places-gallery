import React from 'react'
import { Link } from 'react-router-dom'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {
    if (props.items.length === 0) {
        return (

            <div className="text-center">
                No places found. May be add a new place?
                <Link type="button" className="btn btn-primary" to="/places/new">Share place</Link>
            </div>
        )
    }
    else {
        return (
            <div className="card-columns">
                {
                    props.items.map((place) => (
                        <PlaceItem key={place.id} id={place.id} image={place.image} title={place.title} description={place.description} address={place.address} creator={place.creator} location={place.location} />
                    ))
                }
            </div>
        )
    }
}

export default PlaceList
