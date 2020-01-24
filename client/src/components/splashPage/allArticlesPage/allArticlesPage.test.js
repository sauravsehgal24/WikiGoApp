import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import {render} from '@testing-library/react'
import AllArticles from './allArticles';

it("AllArticlePage renders successfully", ()=>{

    render(<Router><AllArticles/></Router>)

});