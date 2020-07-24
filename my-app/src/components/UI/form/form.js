import React from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';

const Form = (props) => {
    return  <div className ={classes.wrapper}>
                <form className ={classes.form}>  
                    <h1 className ={classes.title}> {props.titleForm} </h1>
                    {props.children}
                </form>
            </div>
}

Form.propTypes = {
    titleForm: PropTypes.string,
    children: PropTypes.array
}


export default Form;