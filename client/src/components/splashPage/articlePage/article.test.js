import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import {render} from '@testing-library/react'
import Article from './article';

it("ArticlePage renders successfully", ()=>{
    
    const testData={
        params:{
        name:'test'
        }
    }

    render(<Router><Article match={testData}/></Router>)

});