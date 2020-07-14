import React from 'react';
import classes from './input.module.scss'

const Input = (props) => (
    		<div className={classes.inputWrapper}>
			 	<input 
			    	value = {props.value}
				    onChange = {(evt) =>{ 
				    	let file = evt.target.files ? evt.target.files[0]: null; 
				    	console.log(file)
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
			    		: null
			    }
	    	</div>
)

export default Input;