import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';

it('App renders successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Router><App /></Router>,div)
    ReactDom.unmountComponentAtNode(div) 
});
