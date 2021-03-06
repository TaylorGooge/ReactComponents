import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import Container  from "react-bootstrap/Container";

export class Navigation extends React.Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" >
        <Container>
        <Navbar.Brand href="/">Logo Here</Navbar.Brand> 
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {MenuItems.map((index)=> (
              <Nav.Link  className = 'navItem'href= {index.link}>{index.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
  }
}
