import React from 'react';
import classes from './input.module.scss'

const Input = (props) => {

    return <div className={classes.inputWrapper}>
		 	<input 
		    	value = {props.value}
			    onChange = {(evt) => props.onChange(evt.target.value, props.name, props.validation)} 
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
}


export default Input;