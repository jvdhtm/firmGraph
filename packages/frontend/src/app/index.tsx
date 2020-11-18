import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch}  from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFoundView from "./pages/NotFound";
import {LocalizationContextProvider} from "./context/LocalizationContext";
import './i18n';

function App() {
    return (
        <Router>
            <LocalizationContextProvider>
                        <Switch>

                            <Route path="/product" component={Product}/>
                            <Route path="/product/:productId" component={Product}/>
                            <Route path="/" component={Home}/>
                            <Route component={NotFoundView}/>
                        </Switch>
            </LocalizationContextProvider>
        </Router>
    );
}

export default App;
