import React from 'react';
import classes from './button.module.scss'
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router";

const Button = (props) => (
    <button
        className ={classes.button + ' ' + classes[props.className]}  
        name={props.name} 
        disabled={props.disabled} 
        type={props.type} 
        onClick= { evt => {
            evt.preventDefault();
            return props.onClick(props);
        }}
    >
        {props.text}
    </button>
)

export default withRouter(Button);