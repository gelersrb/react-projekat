import React from "react"
import logo from "../images/logo.png"
import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function  Navigation() {

    const stilLink = {
        textDecoration: "none"
    }

    return(
       <Navbar className="container-fluid color-nav "  variant="dark" >
           <Link to="/"> <img src={logo} className="logo" alt="React" /></Link>
            <Nav className="ml-auto">
                <Nav.Item className="ml-auto">
                    <Nav.Link href="/">Početna</Nav.Link>
                </Nav.Item>
                <NavDropdown className="ml-auto" title="React" id="collasible-nav-dropdown">
                    <Link to={"/jsx"} style={stilLink}> <NavDropdown.Item href="#/jsx">JSX</NavDropdown.Item></Link>
                    <Link to={"/render"} style={stilLink}> <NavDropdown.Item href="#/render">Render</NavDropdown.Item></Link>
                    <Link to={"/komponenta"} style={stilLink}> <NavDropdown.Item href="/komponenta">Komponente</NavDropdown.Item></Link>
                    <Link to={"/state"} style={stilLink}> <NavDropdown.Item href="/state">State</NavDropdown.Item></Link>
                    <Link to={"/metode"} style={stilLink}> <NavDropdown.Item href="/metode">Lifecycle</NavDropdown.Item></Link>
                    <Link to={"/events"} style={stilLink}> <NavDropdown.Item href="/events">Događaji</NavDropdown.Item></Link>
                    <Link to={"/forme"} style={stilLink}> <NavDropdown.Item href="/forme">Forme</NavDropdown.Item></Link>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Navigation