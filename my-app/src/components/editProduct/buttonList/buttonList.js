import React from 'react';
import classes from './buttonList.module.scss';
import Button from '../../UI/button/button.js';
import { connect } from 'react-redux'
import { onClickSubmit } from '../../../store/actions/editProduct.js'

const ButtonList = (props) => {
    const createClass = () => {
        const classesMessage = [classes.authorizeMessage];
        if (props.currentUser.answerType === 'error') {
            classesMessage.push(classes.error)
        } else if (props.currentUser.answerType === 'success') {
            classesMessage.push(classes.success)
        } else {
            classesMessage.push(classes.hidden)
        }
        return classesMessage.join(' ');
    }

    return <div className ={classes.wrapper}> 
                <span className = {createClass()}>
                    Authorization message: { props.currentUser.message }
                </span>
                {Object.keys(props.buttons).map((key,i) => 
                    <Button 
                        className = {props.buttons[key].className}
                        key = {i}
                        name = {props.buttons[key].name}
                        type = {props.buttons[key].type}
                        text = {props.buttons[key].text}
                        disabled = {props.buttons[key].disabled}
                        onClick = {props.onClickSubmit}
                        form={props.form} 
                        id={props.id}
                    />
                )}
            </div>
}

function mapStateToProps(state) {
    return {
        id: state.editProduct.productID,
        form: state.editProduct.form,
        buttons: state.editProduct.buttons,
        currentUser: state.editProduct.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickSubmit: (email, password, name, history) => dispatch(onClickSubmit(email, password, name, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);