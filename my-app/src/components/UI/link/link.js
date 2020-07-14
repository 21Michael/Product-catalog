import React from 'react';
import PropTypes from 'prop-types';
import classes from './link.module.scss';
import { NavLink } from 'react-router-dom'

const Link = (props) => (
    	<NavLink exact to={props.button.to} className={classes.link}>
	    	{props.button.name} 
	    	<i className={props.button.icon}></i>
	    </NavLink>
)

export default Link;