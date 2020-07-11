import React from 'react';
import classes from './button.module.scss'
import { connect } from 'react-redux'

const Button = (props) => {

    return <button 
    			className ={classes.button + ' ' + classes[props.className]}  
    			name={props.name} 
    			disabled={props.disabled} 
    			type={props.type} 
    			onClick={(evt)=> {
    				evt.preventDefault();
    				return props.onClick(props.email, props.password, props.name);
    			}}
    		>
				{props.text}
			</button>
}

function mapStateToProps(state) {
    return {
        email: state.autorization.form.email.value,
        password: state.autorization.form.password.value
    }
}

export default connect(mapStateToProps)(Button);