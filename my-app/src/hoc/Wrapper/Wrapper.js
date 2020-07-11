import React, { Component } from 'react'
import './reset.css'
import classes from './Wrapper.module.scss'

import Error404 from '../../components/errorSection/error404.js'
import Autoriazation from '../../components/autorization/autorization.js'
import ProductCatalog from '../../components/productCatalog/productCatalog.js';
import AddEditProduct from '../../components/add-editProduct/add_editProduct.js';

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
        	<div className={classes['wrapper']}>
                <Switch>
                    <Route path='/autorization'>  
                        <Autoriazation />
                    </Route>
                    <Route path='/'>  
                        <ProductCatalog />
                    </Route>
                    <Route path='/addEditProduct'>  
                        <AddEditProduct />
                    </Route>
                    <Route> 
                        <Error404 />
                    </Route>
                </Switch> 
        	</div>
        )
    }
}

export default Layout;