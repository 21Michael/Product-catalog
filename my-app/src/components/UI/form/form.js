import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './form.module.scss';

import InputList from './components/inputList/inputList.js';
import ButtonList from './components/buttonList/buttonList.js'

class Form extends Component {
    render() {
        return <div className ={classes.wrapper}>
                    <form className ={classes.form}>  
                        <h1 className ={classes.title}> {this.props.titleForm} </h1>
                        <InputList 
                            form={this.props.form} 
                            onChangeInput ={this.props.onChangeInput}
                        />
                        <ButtonList   
                            id={this.props.id}
                            buttons={this.props.buttons}
                            form={this.props.form} 
                            onClickSubmit={this.props.onClickSubmit} 
                            currentUser={this.props.currentUser}
                        />
                    </form>
               </div>
    }
}

export default Form;