import React from 'react';
import classes from './inputList.module.scss';
import Input from '../../UI/input/input.js'
import { connect } from 'react-redux'
import { onChangeInput } from '../../../store/actions/editProduct.js'

const InputList = (props) => (
    <div className ={classes.wrapper}> 
    	<img  className={classes.img} src={props.imgValid ? props.imgSrc: ''} alt="img"/>
    	<ul>
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
        form: state.editProduct.form,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation, file) => dispatch(onChangeInput(value, name, validation, file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputList);