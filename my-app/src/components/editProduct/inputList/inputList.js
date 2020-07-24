import React from 'react';
import classes from './inputList.module.scss';
import PropTypes from 'prop-types';
import Input from '../../UI/input/input.js'
import { connect } from 'react-redux'
import { onChangeInput } from '../../../store/actions/productForm.js'

const InputList = (props) => (
    <div className ={classes.wrapper}> 
    	<img  className={classes.img} src={props.imgSrc} alt="img"/>
    	<ul  className={classes.list}>
			{Object.keys(props.form).map((key,i) => 
				<Input 
					key={i} 
					file = { props.form[key].file}
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
        form: state.productForm.form,
        imgSrc: state.productForm.form.photo.fileURL
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeInput: (value, name, validation, file) => dispatch(onChangeInput(value, name, validation, file))
    }
}
InputList.propTypes = {
    form: PropTypes.object,
    imgSrc: PropTypes.string,
    onChangeInput: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(InputList);