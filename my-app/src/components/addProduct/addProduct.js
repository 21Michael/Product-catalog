import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import PropTypes from 'prop-types'
import classes from './addProduct.module.scss'
import { connect } from 'react-redux'
import { onClickSubmit } from '../../store/actions/addProduct.js'
import Form from '../../hoc/form/form.js'
import ButtonList from './buttonList/buttonList.js'
import InputList from './inputList/inputList.js'

class AddProduct extends Component {
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
        titleForm: state.addProduct.titleForm
    }
}

export default connect(mapStateToProps)(AddProduct);