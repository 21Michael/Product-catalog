import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './autorization.module.scss';
import { connect } from 'react-redux'

import InputList from './components/inputList/inputList.js';
import ButtonList from './components/buttonList/buttonList.js'

class Autorization extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                    <form className ={classes.form}>  
                        <h1 className ={classes.title}> Autorization </h1>
                        <InputList />
                        <ButtonList />
                    </form>
                </div>
            </ErrorBoundary>
        )
    }
}

export default Autorization;