import React from 'react';
import PropTypes from 'prop-types';
import classes from './list.module.scss';
import Item from './item/item.js'
import { connect } from 'react-redux';

const List = (props) => (
    <ul className={classes.list}>
 		{ props.products.map((el, i) => 
 			<Item 
 				id={el.key}
	 			img ={el.img}
	            title={el.title}
	            description={el.description}
	            price={el.price}
	            discount={el.discount}
	            discountDuration={el.discountDuration}
	 			key={el.key}
 			/>) 
 		}
 	</ul>
)

function mapStateToProps(state) {
    return {
        products: state.productCatalog.products
    }
}



export default connect(mapStateToProps)(List);