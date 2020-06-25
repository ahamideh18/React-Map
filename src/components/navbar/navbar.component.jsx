import React from 'react';

import { Navbar, Nav, Form } from 'react-bootstrap';

import Search from '../search/search-bar.component'

import './navbar.styles.css'

class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className='nav navbar transparent navbar-dark navbar-fixed-top'>
                <Navbar.Brand href="#home" className='title'>React Map</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto links">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Form inline className='searchBox'>
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;