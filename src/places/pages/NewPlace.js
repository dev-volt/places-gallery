import React from 'react'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import {useForm} from '../../shared/hooks/form-hook'



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
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
    },false);

    

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add place</h4>
                            <form>
                                <Input
                                    id="txtName"
                                    label="Name"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter valid name"
                                    onInput={inputHandler} />
                                <Input
                                    id="txtDescription"
                                    label="Description"
                                    element="textarea"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
                                    errorText="Please enter valid description (Enter more tha 5 characters)"
                                    onInput={inputHandler} />
                                <Input
                                    id="txtAddress"
                                    label="Address"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE()]}
                                    errorText="Please enter valid Address"
                                    onInput={inputHandler} />
                                <button type="button" className="btn btn-primary" disabled={!formState.isValid} onClick={placeSubmitHandler}>Add Place</button>
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

export default NewPlace
