import React from 'react'
import Navbar from './components/NavBar'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItem from './components/ProductItem';


 const Routes = () => {
    return (
        <div>
            <Router>

            <Navbar/>
              <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route  path="/product/:id" component={ProductItem} />
            </Switch>
            </Router>
        </div>
    )
}
export default Routes;