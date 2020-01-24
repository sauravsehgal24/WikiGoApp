import React, { Component, useState, setState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {

  const [navHeading, setNavHeading] = useState('All Articles');

  const setNavHeadingFunc = function (name){
    setNavHeading(name);
  }

  return ( 
    <React.Fragment>
      <Navbar  className="navBar" expand="lg" >
        <h4> | {navHeading}</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5 fontSize"  >
              <Link onClick={()=> setNavHeadingFunc('All Articles')} style={{ color: "black" }} to="/">
                All Articles
              </Link>
            </Nav.Link>
            <Nav.Link className="mr-5 fontSize"  >
              <Link onClick={()=> setNavHeadingFunc('Add New Article')} style={{ color: "black" }} to="/article/add">
                Add New Article
              </Link>
            </Nav.Link>
                <a className="mr-5 mt-2 fontSize" href='https://www.linkedin.com/in/saurav-sehgal/' target='_blank'>My Linkedin</a>
                <a className="mr-5 mt-2 fontSize" href='https://github.com/sauravsehgal24' target='_blank'>My Github</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
