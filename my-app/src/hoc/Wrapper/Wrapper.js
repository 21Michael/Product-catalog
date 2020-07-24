import React, { Component } from 'react'
import './reset.css'
import classes from './Wrapper.module.scss'

import Error404 from '../../containers/errorSection/error404.js'
import Authorization from '../../containers/authorization/authorization.js'
import ProductCatalog from '../../containers/productCatalog/productCatalog.js';
import AddProduct from '../../containers/addProduct/addProduct.js';
import EditProduct from '../../containers/editProduct/editProduct.js';

import { Switch, Route } from 'react-router-dom'

class Layout extends Component {
    render() {
        return (
            <div className={classes['wrapper']}>
                <Switch>
                    <Route exact path='/'>  
                        <ProductCatalog />
                    </Route>
                     <Route exact path='/authorization'>  
                        <Authorization />
                    </Route>
                    <Route exact path='/addProduct'>  
                        <AddProduct />
                    </Route>
                    <Route exact path='/editProduct'>  
                        <EditProduct />
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