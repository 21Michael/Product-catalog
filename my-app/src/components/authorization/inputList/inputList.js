import React from 'react';
import classes from './inputList.module.scss';
import PropTypes from 'prop-types';
import Input from '../../UI/input/input.js'
import { connect } from 'react-redux'
import { onChangeInput } from '../../../store/actions/authorization.js'

const InputList = (props) => (
    <div className ={classes.wrapper}> 
    	<ul  className ={classes.list}>
			{Object.keys(props.form).map((key,i) => 
				<Input 
					key={i} 
					name ={ props.form[key].name}
		            value={ props.form[key].value}
		            min = { props.form[key].minDate}
		            type={props.form[key].type}
		            placeholder={props.form[key].placeholder}
		            validation ={props.form[key].validation}
		            required = {props.form[key].required}
					onChange={ props.onChangeInput}
				/>
			)}	
		</ul>
	</div>
)

function mapStateToProps(state) {
    return {
        form: state.authorization.form
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation) => dispatch(onChangeInput(value, name, validation))
    }
}

InputList.propTypes = {
    form: PropTypes.object,
    onChangeInput: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(InputList);