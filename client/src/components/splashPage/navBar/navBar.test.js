import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from './navBar';

it("NavBar renders successfully", ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Router><NavBar /></Router>,div)
    ReactDom.unmountComponentAtNode(div) 
})