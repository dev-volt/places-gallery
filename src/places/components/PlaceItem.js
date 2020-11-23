import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../shared/components/UIElements/Modal'

import Map from '../../shared/components/UIElements/Map'
import {AuthContext} from '../../shared/context/auth-context'
const PlaceItem = (props) => {
    const auth = useContext(AuthContext)

    const deletePlaceHandler= () => {
        console.log("Delete place ")
    }

    return (
            <div className="card text-white bg-secondary">
                <img className="card-img-top" src={props.image} alt={props.title} />
                <div className="card-body">
                    <h3 className="card-title">{props.title} </h3>
                    <h4 className="card-title">{props.address} </h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer text-muted">
                    <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#mapModal">
                        View on Map
                    </button>
                    {auth.isLoggedIn && <Link className="btn btn-info m-1" to={`/places/${props.id}`}>Edit</Link>}
                    {auth.isLoggedIn && <button className="btn btn-danger m-1" data-toggle="modal" data-target="#deleteConfirm">Delete</button>}
                    
                    
                </div>
                {console.log(props.location)}
                <Modal id="mapModal" modalTitle={props.title} >
                    <Map center={props.location} zoom={16}/>
                </Modal>
                <Modal id="deleteConfirm" modalTitle="Confirm Delete?" footer={
                    <React.Fragment>
                        <button className="btn btn-danger m-1" onClick={deletePlaceHandler}>Yes</button>
                        <button className="btn btn-primary m-1" data-dismiss="modal">No</button>
                    </React.Fragment>
                }>
                    <p>Do you really want to delete this place?</p>
                </Modal>
            </div>
    )
}

export default PlaceItem
