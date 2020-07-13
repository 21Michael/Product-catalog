import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types'
import classes from './addProduct.module.scss'
import { connect } from 'react-redux'
import { onClickSubmit } from '../../store/actions/addProduct.js'
import { onChangeInput } from '../../store/actions/addProduct.js'
import Form from '../UI/form/form.js'

class AddProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
               <Form 
                 titleForm={this.props.titleForm} 
                 form={this.props.form}
                 onChangeInput= {this.props.onChangeInput}
                 buttons={this.props.buttons}
                 onClickSubmit={this.props.onClickSubmit}
                 currentUser={this.props.currentUser}
               />
            </ErrorBoundary>
        )
    }
}

function mapStateToProps(state) {
    return {
        titleForm: state.addProduct.titleForm,
        form: state.addProduct.form,
        buttons: state.addProduct.buttons,
        currentUser: state.addProduct.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation, file) => dispatch(onChangeInput(value, name, validation, file)),
        onClickSubmit: (email, password, name, history) => dispatch(onClickSubmit(email, password, name, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);