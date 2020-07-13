import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './authorization.module.scss';
import { connect } from 'react-redux'
import { onClickSubmit } from '../../store/actions/authorization.js'
import { onChangeInput } from '../../store/actions/authorization.js'
import Form from '../UI/form/form.js';

class Authorization extends Component {
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
                    />
                </div>
            </ErrorBoundary>
        )
    }
}

function mapStateToProps(state) {
    return {
        titleForm: state.authorization.titleForm,
        form: state.authorization.form,
        buttons: state.authorization.buttons,
        currentUser: state.authorization.currentUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation) => dispatch(onChangeInput(value, name, validation)),
        onClickSubmit: (email, password, name, history) => dispatch(onClickSubmit(email, password, name, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);