import React from 'react';
import classes from './button.module.scss'
import PropTypes from 'prop-types';
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

Button.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    text: PropTypes.string
}

export default withRouter(Button);