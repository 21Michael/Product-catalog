import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './add_editProduct.module.scss';

class AddEditProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
         		<div> AddEditProduct </div>
            </ErrorBoundary>
        )
    }
}

export default AddEditProduct;