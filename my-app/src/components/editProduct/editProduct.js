import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './editProduct.module.scss';
import { connect } from 'react-redux'
import { onClickSubmit } from '../../store/actions/editProduct.js'
import { onChangeInput } from '../../store/actions/editProduct.js'
import Form from '../UI/form/form.js'

class EditProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                   <Form 
                     titleForm={this.props.titleForm} 
                     form={this.props.form}
                     onChangeInput= {this.props.onChangeInput}
                     buttons={this.props.buttons}
                     onClickSubmit={this.props.onClickSubmit}
                     currentUser={this.props.currentUser}
                     id = {this.props.id}
                   />
                </div>
            </ErrorBoundary>
        )
    }
}
function mapStateToProps(state) {
    return {
        id:  state.editProduct.productID,
        titleForm: state.editProduct.titleForm,
        form: state.editProduct.form,
        buttons: state.editProduct.buttons,
        currentUser: state.editProduct.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation, file) => dispatch(onChangeInput(value, name, validation, file)),
        onClickSubmit: (email, password, name, history) => dispatch(onClickSubmit(email, password, name, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);