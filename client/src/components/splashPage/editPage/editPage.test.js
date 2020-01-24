import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import {render} from '@testing-library/react'
import EditArticle from './editPage';

it("EditPage renders successfully", ()=>{

    const testData={
        params:{
        name:'test'
        }
    }
    render(<EditArticle match={testData} />)

});