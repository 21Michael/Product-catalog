import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js';
import PropTypes from 'prop-types';
import classes from './addProduct.module.scss';

import InputList from './components/inputList/inputList.js';
import ButtonList from './components/buttonList/buttonList.js';

class AddProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                    <form className ={classes.form}>  
                        <h1 className ={classes.title}> Add product </h1>
                        <InputList />
                        <ButtonList />
                    </form>
                </div>
            </ErrorBoundary>
        )
    }
}

export default AddProduct;