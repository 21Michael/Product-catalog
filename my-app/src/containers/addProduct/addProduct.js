import React, { Component } from 'react'
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './addProduct.module.scss'

import Form from '../../components/UI/form/form.js';
import ButtonList from '../../components/addProduct/buttonList/buttonList.js'
import InputList from '../../components/addProduct/inputList/inputList.js'

class AddProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
            <div className ={classes.wrapper}>
                <Form titleForm={'Add product'} >
                    <InputList/>
                    <ButtonList/> 
                </Form>
            </div>
            </ErrorBoundary>
        )
    }
}



export default AddProduct;