import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './editProduct.module.scss';
import { connect } from 'react-redux'
import ButtonList from './buttonList/buttonList.js'
import InputList from './inputList/inputList.js'
import Form from '../../hoc/form/form.js'

class EditProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                   <Form titleForm={this.props.titleForm} >
                        <InputList/>
                        <ButtonList/> 
                    </Form>
                </div>
            </ErrorBoundary>
        )
    }
}

function mapStateToProps(state) {
    return {
        titleForm: state.editProduct.titleForm
    }
}

export default connect(mapStateToProps)(EditProduct);