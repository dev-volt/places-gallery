import React, { useState,useContext } from 'react'
import Input from '../../shared/components/FormElements/Input'
import { useForm } from '../../shared/hooks/form-hook'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators'
import {AuthContext} from '../../shared/context/auth-context'

const Auth = () => {
    const auth = useContext(AuthContext)
    const [isLoginMode, setIsLoginMode] = useState(true)

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs)
        auth.login()
    }

    const switchModeHandler = (event) => {
        event.preventDefault();
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                }
                , formState.inputs.email.isValid && formState.input.password.isValid)
        }
        else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                }, false)
        }

        setIsLoginMode(prevMode => !prevMode)
    }
    

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Login Form</h4>
                            <form onSubmit={loginHandler}>
                                {
                                    !isLoginMode &&
                                    <Input
                                        id="name"
                                        label="Name"
                                        element="input"
                                        type="text"
                                        validators={[VALIDATOR_REQUIRE()]}
                                        errorText="Please enter valid Name"
                                        onInput={inputHandler} />
                                }

                                <Input
                                    id="email"
                                    label="Email"
                                    element="input"
                                    type="text"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                                    errorText="Please enter valid email"
                                    onInput={inputHandler} />
                                <Input
                                    id="password"
                                    label="Password"
                                    element="input"
                                    type="password"
                                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                                    errorText="Please enter valid password"
                                    onInput={inputHandler} />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" disabled={!formState.isValid}>Login</button>
                                    <button type="button" className="btn btn-outline-secondary" onClick={switchModeHandler}>Sign Up</button>
                                </div>

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

export default Auth
