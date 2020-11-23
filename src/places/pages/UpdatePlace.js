import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input';
import {useForm} from '../../shared/hooks/form-hook'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';

const UpdatePlace = () => {
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

    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true)

    const [formState, inputHandler, setFormData]=useForm({
        txtName : {
            value : '',
            isValid : false
        },
        txtDescription : {
            value : '',
            isValid : false
        },
        txtAddress : {
            value : '',
            isValid : false
        }
    },false)

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)
    
    

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                txtName : {
                    value : identifiedPlace.title,
                    isValid : true
                },
                txtDescription : {
                    value : identifiedPlace.description,
                    isValid : true
                },
                txtAddress : {
                    value : identifiedPlace.address,
                    isValid : true
                }
            },true)
        }
        
        setIsLoading(false)
    }, [setFormData, identifiedPlace])

    if (!identifiedPlace) {
        return <div className="alert alert-danger m-3" role="alert">
            <strong>Could not find the place</strong>
        </div>
    }

    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs)
    }
    
    if(isLoading)
    {
        return <div className="alert alert-info m-3" role="alert">
            <strong>Loading..</strong>
        </div>
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Update place</h4>
                            <form onSubmit={placeUpdateSubmitHandler}>
                                <Input
                                    id="txtName"
                                    label="Name"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter valid name"
                                    onInput={inputHandler}
                                    initialValue={formState.inputs.txtName.value}
                                    initialIsValid={formState.inputs.txtName.isValid} />
                                <Input
                                    id="txtDescription"
                                    label="Description"
                                    element="textarea"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                                    errorText="Please enter valid description (Enter more tha 5 characters)"
                                    onInput={inputHandler}
                                    initialValue={formState.inputs.txtDescription.value}
                                    initialIsValid={formState.inputs.txtDescription.isValid} />
                                <Input
                                    id="txtAddress"
                                    label="Address"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter valid Address"
                                    onInput={inputHandler}
                                    initialValue={formState.inputs.txtAddress.value}
                                    initialIsValid={formState.inputs.txtAddress.isValid} />
                                <button type="submit" className="btn btn-primary" disabled={!formState.isValid} >Add Place</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="col-md-2">

                </div>
            </div>
        </div>
    )
}

export default UpdatePlace
