import React from 'react';
import classes from './button.module.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";

const Button = (props) => {
    return <button
                className ={classes.button + ' ' + classes[props.className]}  
                name={props.name} 
                disabled={props.disabled} 
                type={props.type} 
                 onClick= { evt => {
                    evt.preventDefault();
                    return props.onClick(props.email, props.password, props.name,  props.history);
                }}
            >
                {props.text}
            </button>
}

function mapStateToProps(state) {
    return {
        email: state.authorization.form.email.value,
        password: state.authorization.form.password.value
    }
}

export default withRouter(connect(mapStateToProps)(Button));