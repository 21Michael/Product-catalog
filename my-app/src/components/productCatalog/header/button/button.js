import React from 'react';
import PropTypes from 'prop-types';
import classes from './button.module.scss';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'

const Button = (props) => {

	return <div className={classes.wrapper}>
		{
				props.email

					?<React.Fragment>
						<div className={classes.email}>{ props.email} </div>
						<NavLink exact to='/addProduct' className={classes.button}>
					    	Add product <i className="icon-plus"></i>
					    </NavLink> 
				    </React.Fragment>
					:<NavLink exact to='/' className={classes.button}>
				    	Sign In <i className="icon-signin"></i>
				    </NavLink>
			}
	    </div>
}

function mapStateToProps(state) {
    return {
        email: state.authorization.currentUser.authorized.email
    }
}

export default connect(mapStateToProps)(Button);