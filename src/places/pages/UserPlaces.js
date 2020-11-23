import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const UserPlaces = () => {
    const DUMMY_PLACES = [
        {
            "id": "p1",
            "title": "Gateway of India",
            "description": "British era entrance for mumbai port!",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/240px-Mumbai_03-2016_30_Gateway_of_India.jpg",
            "address": "Mumbai, Maharashtra",
            "location": {
                "lat": 18.9219841,
                "lng": 72.8346543
            },
            "creator": 1,
        },
        {
            "id": "p2",
            "title": "Gateway of India",
            "description": "British era entrance for mumbai port!",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/240px-Mumbai_03-2016_30_Gateway_of_India.jpg",
            "address": "Mumbai, Maharashtra",
            "location": {
                "lat": 18.9219841,
                "lng": 72.8346543
            },
            "creator": 2,
        }
    ]

    const uid = useParams().uid;
    const filteredPlaces = DUMMY_PLACES.filter(place => {
        return place.creator === parseInt(uid)
    });

    return (
        <div className="container mt-3">
            <div className="row">
                <PlaceList items={filteredPlaces}></PlaceList>
            </div>
        </div>
    )
}

export default UserPlaces
