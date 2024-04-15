import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faInfoCircle, faAddressBook, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import additional icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className="navContainer fixed-top"> {/* Added fixed-top class */}
            <Container fluid className="navContainer"> {/* Used fluid container for full width */}
                <Navbar.Brand href="#home" className="brand">
                    <div className="navbar-con">
                    <h1 className="head">Createnary</h1>
                    <div className="search-wrapper">
                    <FontAwesomeIcon icon={faSearch}  className="search-icon"/> 
                            <input className="inputsearch" type="search" placeholder="creator" onClick={toggleDropdown} />
                            <Dropdown.Menu show={showDropdown} className="dropdown">
                                <Dropdown.Item href="#">beauty</Dropdown.Item>
                                <Dropdown.Item href="#">fashion</Dropdown.Item>
                                <Dropdown.Item href="#">comedy</Dropdown.Item>
                            </Dropdown.Menu>
                    </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle className="size" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto margin icons-con">
                        <Nav.Link href="#join" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} className="icon-cart"/> <span className="nav-text">Cart</span></Nav.Link>
                        <Nav.Link href="/classes" className="nav-link pt-3"><FontAwesomeIcon icon={faInfoCircle} className="icon-about"/> <span className="nav-text">About</span></Nav.Link>
                        <Nav.Link href="/products" className="nav-link pt-3"><FontAwesomeIcon icon={faAddressBook} className="icon-contact"/> <span className="nav-text">Contact</span></Nav.Link>
                        <Nav.Link href="/about" className="nav-link pt-3"><button className="loginButton"><FontAwesomeIcon icon={faUser} /> Login</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
