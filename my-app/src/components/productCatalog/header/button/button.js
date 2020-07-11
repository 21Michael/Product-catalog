import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';
import {NavLink} from 'react-router-dom'

const Button = (props) => (
	<div>
    	<NavLink exact to='/autorization' className={classes.button}>
    		Sign In <i className="icon-signin"></i>
    	</NavLink>
    </div>
)

export default Button;