import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';

class Form extends Component {
    render() {
        return <div className ={classes.wrapper}>
                    <form className ={classes.form}>  
                        <h1 className ={classes.title}> {this.props.titleForm} </h1>
                        {this.props.children}
                    </form>
               </div>
    }
}

export default Form;