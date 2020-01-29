//dependencies
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EditArticle(props) {

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [genere, setGenere] = useState('')

  const bindInput = (e,input) => {
      if(input === "Author"){
        setAuthor(e.target.value); 
      }
      else if(input === "Genere"){
          setGenere(e.target.value);
      }
      else{
        setName(e.target.value);
    }
  }

  const editArticle = () =>{
    const payload = {
        name,
        author,
        genere
    }

    axios
      .put("/api/articles/?name="+props.match.params.name , payload)
      .then(res => {
          console.log(res)
        props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      });
  }
 
  return (
    <React.Fragment>
        <Card>
            <h1>Edit Article <i>"{props.match.params.name}"</i></h1>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e)=>{bindInput(e,'Name')}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Author</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Author"
                aria-describedby="basic-addon1"
                onChange={(e)=>{bindInput(e,'Author')}}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Genere</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                aria-label="Genere"
                aria-describedby="basic-addon1"
                onChange={(e)=>{bindInput(e,'Genere')}}
                />
            </InputGroup>
            <Button variant="primary" size="lg" onClick={()=>editArticle()}>Update</Button>
            <Button className="mt-3" variant="danger" size="lg" onClick={()=>props.history.push('/')}>Cancel</Button>
        </Card>
    </React.Fragment>
  );
}
