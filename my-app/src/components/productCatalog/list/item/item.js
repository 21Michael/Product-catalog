import React from 'react';
import PropTypes from 'prop-types';
import classes from './item.module.scss';
import { connect } from 'react-redux';
import { deleteItem } from '../../../../store/actions/productCatalog.js'
import { editItem } from '../../../../store/actions/productCatalog.js'
import { NavLink } from 'react-router-dom'

const Item = (props) => {
    const discountPrice = props.price - (props.price * (props.discount / 100))
    return <li className={classes.item} id={props.id}>

				<div className={classes.img__block}>
					<img className={classes.img} src={props.img} alt="img"/>
				</div>

				<div className={classes.info__block}>
		        	<h2 className={classes.name}>{props.name}</h2>
		        	<p className={classes.description}>{props.description}</p>
		    	</div>

		    	<div className={classes.price__block}>
		    		{
		    			props.discount 
	    				   ?<React.Fragment>
			    				<span className={classes.price}>
			    					{Math.floor(discountPrice  * 100) / 100}€ 
					    			<sub className={classes.discount}>-{props.discount}%</sub>
					    		</span>
					    		<span className={classes.days}>
					    			<sup>*</sup>
					    			{props.discountDuration} days to the end of the discount.
					    		</span>
			    			</React.Fragment>
				    	   :<React.Fragment>
					    		<span className={classes.price}>
					    			{props.price}€
					    		</span>
				    		</React.Fragment>
		    		}
		    	</div>

		    	<div className={classes.buttons__block}>
			    	<NavLink 
			    		exact to='/editProduct' 
			    		className={classes.edit} 
			    		onClick={(evt) => props.editItem(props.id, props.products)}
			    	>
			    		<i className="icon-edit"></i>
			    	</NavLink> 
		    		<button 
		    			className={classes.delete} 
		    			onClick={(evt) => props.deleteItem(props.id, props.products)}
		    		>
		    			<i className="icon-trash"></i>
		    		</button>
		    	</div>	
			</li>
}

function mapStateToProps(state) {
    return {
        products: state.productCatalog.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteItem: (id, products) => dispatch(deleteItem(id, products)),
        editItem: (id, products) => dispatch(editItem(id, products))
    }
}

Item.propTypes = {
    products: PropTypes.array,
    deleteItem: PropTypes.func,
    editItem: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);