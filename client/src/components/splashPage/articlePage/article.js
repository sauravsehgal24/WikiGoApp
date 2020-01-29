//dependencies
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
 
export default function Article(props) {
  var [articleState, setArticleState] = useState({
    article: {}
  });

  useEffect(() => {
    axios
      .get("/api/articles/?name=" + props.match.params.name)
      .then(res => {
        console.log(res);
        const { data: article } = res;
        setArticleState({ ...articleState, article });
      })
      .catch(err => {
        throw err;
      });
  }, []);

  return (
    <React.Fragment>
      <h1>
        <u>{articleState.article.name}</u>
        <Link to={'/article/edit/'+ articleState.article.name}>
        <Button variant="link" size="lg">Edit</Button>
        </Link>
      </h1>
      <h3>Author: {articleState.article.author}</h3>
      <h3>Genere: {articleState.article.genere}</h3>
    </React.Fragment>
  );
}
