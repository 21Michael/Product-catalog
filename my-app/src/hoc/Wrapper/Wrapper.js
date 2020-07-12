import React, { Component } from 'react'
import './reset.css'
import classes from './Wrapper.module.scss'

import Error404 from '../../components/errorSection/error404.js'
import Authorization from '../../components/authorization/authorization.js'
import ProductCatalog from '../../components/productCatalog/productCatalog.js';
import AddProduct from '../../components/addProduct/addProduct.js';
import EditProduct from '../../components/editProduct/editProduct.js';

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div className={classes['wrapper']}>
                <Switch>
                    <Route exact path='/'>  
                        <Authorization />
                    </Route>
                    <Route exact path='/productsCatalog'>  
                        <ProductCatalog />
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