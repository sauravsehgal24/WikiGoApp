import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import SplashPage from './splashPage';

it("SplashPage renders successfully", ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Router><SplashPage></SplashPage></Router>,div)
    ReactDom.unmountComponentAtNode(div) 
})