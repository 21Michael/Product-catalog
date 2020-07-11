import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';

import Button from './button/button.js'

const Header = (props) => (
	<header className={classes.header}>
    	<h1 className={classes.title}> Product catalog </h1> 
    	<Button />
    </header>
)

export default Header;