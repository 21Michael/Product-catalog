import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './editProduct.module.scss';

import ButtonList from '../../components/editProduct/buttonList/buttonList.js'
import InputList from '../../components/editProduct/inputList/inputList.js'
import Form from '../../components/UI/form/form.js';

class EditProduct extends Component {
    render() {
        return (
            <ErrorBoundary>
                <div className ={classes.wrapper}>
                   <Form titleForm={'Edit product'} >
                        <InputList/>
                        <ButtonList/> 
                    </Form>
                </div>
            </ErrorBoundary>
        )
    }
}

export default EditProduct;