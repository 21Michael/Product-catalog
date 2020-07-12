import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './editProduct.module.scss';

import InputList from './components/inputList/inputList.js';
import ButtonList from './components/buttonList/buttonList.js';

class EditProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                    <form className ={classes.form}>  
                        <h1 className ={classes.title}> Edit Product </h1>
                        <InputList />
                        <ButtonList />
                    </form>
                </div>
            </ErrorBoundary>
        )
    }
}

export default EditProduct;