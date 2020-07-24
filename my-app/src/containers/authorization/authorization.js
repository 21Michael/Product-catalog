import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types';
import classes from './authorization.module.scss';
import { connect } from 'react-redux'
import Form from '../../components/UI/form/form.js';
import ButtonList from '../../components/authorization/buttonList/buttonList.js'
import InputList from '../../components/authorization/inputList/inputList.js'

class Authorization extends Component {
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
        titleForm: state.authorization.titleForm
    }
}
Authorization.propTypes = {
    titleForm: PropTypes.string
};

export default connect(mapStateToProps)(Authorization);