import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './productCatalog.module.scss';

import List from './list/list.js'
import Header from './header/header.js'

class ProductCatalog extends Component {
    render() {
        return (
            <ErrorBoundary>
         		<section className={classes.section}>
                    <Header/>
         			<List/>
         		</section>
            </ErrorBoundary>
        )
    }
}

export default ProductCatalog;