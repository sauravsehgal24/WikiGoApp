//dependencies
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

//components
import NavBar from "./navBar/navBar";
import AllArticles from "./allArticlesPage/allArticles";
import Article from "./articlePage/article";
import AddArticle from './addArticle/addArticle';
import EditArticle from './editPage/editPage';
 
//files
import "./splashPage.css";

export default function SplashPage(props) {
  return (
    <React.Fragment>
      <React.Fragment>
        <NavBar />
        <Container className="splashPageContainer" fluid>
          <Switch>
            <Route exact path="/article/add" {...props} component={AddArticle} />
            <Route exact path="/article/edit/:name" component={EditArticle} />
            <Route exact path="/article/:name" component={Article} />
            <Route exact path="/"  component={AllArticles} />
          </Switch>
        </Container>
      </React.Fragment>
    </React.Fragment>
  );
}
