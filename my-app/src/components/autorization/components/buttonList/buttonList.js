import React from 'react';
import classes from './buttonList.module.scss';
import Button from './button/button.js';
import { connect } from 'react-redux'
import { onClickSubmit } from '../../../../store/actions/autorization.js'

const ButtonList = (props) => (
    <div className ={classes.wrapper}> 
		{Object.keys(props.buttons).map((key,i) => 
			<Button 
				className = {props.buttons[key].className}
				key={i}
				name = { props.buttons[key].name}
	            type = {props.buttons[key].type}
	            text = {props.buttons[key].text}
	            disabled = {props.buttons[key].disabled}
	            onClick = {props.onClickSubmit}
			/>
		)}
	</div>
)

function mapStateToProps(state) {
    return {
        buttons: state.autorization.buttons
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickSubmit: (email, password, name) => dispatch(onClickSubmit(email, password, name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList);