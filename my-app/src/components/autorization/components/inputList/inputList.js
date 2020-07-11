import React from 'react';
import classes from './inputList.module.scss';
import Input from './input/input.js';
import { connect } from 'react-redux'
import { onChangeInput } from '../../../../store/actions/autorization.js'

const InputList = (props) => (
    <div className ={classes.wrapper}> 
		{Object.keys(props.form).map((key,i) => 
			<Input 
				key={i} 
				name ={ props.form[key].name}
	            value={ props.form[key].value}
	            type={props.form[key].type}
	            placeholder={props.form[key].placeholder}
	            validation ={props.form[key].validation}
	            required = {props.form[key].required}
				onChange={ props.onChangeInput}
			/>
		)}
	</div>
)

function mapStateToProps(state) {
    return {
        form: state.autorization.form
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation) => dispatch(onChangeInput(value, name, validation))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputList);