import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './productCatalog.module.scss';
import axios from 'axios'

import List from './list/list.js'
import Header from './header/header.js'
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/productCatalog.js';

class ProductCatalog extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

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

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts())
    }
}

export default connect(false, mapDispatchToProps)(ProductCatalog);