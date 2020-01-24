import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import {render} from '@testing-library/react'
import AddArticle from './addArticle';

it("AddArticle page renders successfully", ()=>{

    render(<Router><AddArticle/></Router>)

});