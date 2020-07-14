import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './productCatalog.module.scss';
import axios from 'axios'

import List from '../../components/productCatalog/list/list.js'
import Header from '../../components/productCatalog/header/header.js'
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/productCatalog.js';
import { cleanForm } from '../../store/actions/authorization.js'

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
        getProducts: () => dispatch(getProducts()),
        cleanForm: () => dispatch(cleanForm())
    }
}

export default connect(false, mapDispatchToProps)(ProductCatalog);