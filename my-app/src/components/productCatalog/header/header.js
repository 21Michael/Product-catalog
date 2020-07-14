import React from 'react';
import PropTypes from 'prop-types';
import classes from './header.module.scss';
import Link from '../../UI/link/link.js'
import { connect } from 'react-redux';

const Header = (props) => (
	<header className={classes.header}>
    	<h1 className={classes.title}> Product catalog </h1> 
    	<div className={classes.wrapper_button}>
    		{
				props.email 
					?   <React.Fragment>
							<div className={classes.email}>{ props.email} </div>
		    				<Link button={props.addButton}/>
		    			</React.Fragment>
		    		: 	<Link button={props.signInButton}/>
    		}
    	</div>
    </header>
)

function mapStateToProps(state) {
    return {
        email: state.authorization.currentUser.authorized.email,
        addButton: state.productCatalog.buttons.addButton,
        signInButton: state.productCatalog.buttons.signInButton,
    }
}

export default connect(mapStateToProps)(Header);