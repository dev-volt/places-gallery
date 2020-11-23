import React, { useReducer, useEffect }  from 'react'
import { validate } from '../../utils/validators'
import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCHED':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, { value: props.initialValue || '', isValid: props.initialIsValid|| false, isTouched: false });
    const changeHandler = (event) => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators })
    }

    const touchHandler = (event) => {
        dispatch({ type: 'TOUCHED' })
    }

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, onInput , value, isValid])

    const element = props.element === "input" ?
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onBlur={touchHandler}
            onChange={changeHandler}
            value={inputState.value}
            className={`form-control ${props.className}  ${inputState.isTouched ? (inputState.isValid ? 'is-valid' : 'is-invalid') : ''}`} 
            /> :
        <textarea
            id={props.id}
            rows={props.rows || 3}
            value={inputState.value}
            onBlur={touchHandler}
            onChange={changeHandler}
            className={`form-control ${props.className}  ${inputState.isTouched ? (inputState.isValid ? 'is-valid' : 'is-invalid') : ''}`}>
        </textarea>

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className="text-danger">{props.errorText}</p>}
        </div>
    )
}

export default Input
