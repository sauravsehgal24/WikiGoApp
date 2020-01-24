//dependencies
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function AllArticles(props) {
  var [articlesState, setArticlesState] = useState({
    articles: []
  });

  useEffect(() => {
      axios
        .get("/api/articles")
        .then(res => {
          const { data: articlesArray } = res;
          setArticlesState({
            articles: [...articlesState.articles, ...articlesArray]
          });
          console.log(articlesState);
        })
        .catch(err => {
          throw err;
        })}, []);

  return (
    <React.Fragment>
     
          <h1><u>Articles</u></h1>
        {
            articlesState.articles.map((article)=>{
               return <Link to={`/article/${article.name}`}><h3>{article.name}</h3></Link>
            })
        }
     
    </React.Fragment>
  );
}
