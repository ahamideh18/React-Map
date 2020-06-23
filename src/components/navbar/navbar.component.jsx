import React from 'react';

import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';

import Search from '../search/search-bar.component'

import './navbar.styles.css'

class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className='nav navbar transparent navbar-inverse navbar-fixed-top'>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;