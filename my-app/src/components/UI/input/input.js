import React from 'react';
import classes from './input.module.scss'
import PropTypes from 'prop-types';

const Input = (props) => {
    return <li className={classes.item}>
   				{props.required ? <span className={classes.dot}>*</span> : null}
			 	<input 
			 		className={classes.input}
			    	value = {props.value}
			    	file = {props.file}
				    onChange = {(evt) =>{ 
				    	let file = evt.target.files ? evt.target.files[0]: null;  
				    	props.onChange(evt.target.value, props.name, props.validation, file )} 
				    }
				    min={props.min}
				    type = {props.type}
				    name = {props.name}  
				    placeholder = {props.placeholder}   
				    required = {props.required}  
			    />
			    {
			    	(!props.validation.valid && props.validation.changed )
			    		?<span>{props.validation.errorMessage} </span>
			    		:null
			    }
	    	</li>
}

Input.propTypes = {
    value: PropTypes.string,
    file:  PropTypes.object,
    validation: PropTypes.object,
    min: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange:PropTypes.func
}

export default Input;