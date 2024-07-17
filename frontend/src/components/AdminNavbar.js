import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Button, Form, FormControl, Image, Dropdown } from 'react-bootstrap';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import '../styling/AdminNavbar.css'; // Import file CSS yang terpisah

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;

    return (
        <Navbar bg="primary" expand="lg" className="mb-4 admin-navbar">
            <Container fluid>
                <Button
                    variant="outline-light"
                    className="d-lg-none"
                    onClick={() => setShowSidebar('left-0')}
                >
                    <FaBars />
                </Button>
                <Navbar.Brand className="text-white text-uppercase">
                    {location === '/'
                        ? 'Dashboard'
                        : location.slice(1).toUpperCase().replace('/', '')}
                </Navbar.Brand>
                <Button
                    variant="outline-light"
                    className={`d-lg-none ${showSidebar === 'left-0' ? '' : 'd-none'}`}
                    onClick={() => setShowSidebar('-left-64')}
                >
                    <FaTimes />
                </Button>
                <Navbar.Collapse className="justify-content-end">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">
                            <FaSearch />
                        </Button>
                    </Form>
                    <Dropdown alignRight>
                        <Dropdown.Toggle as={Image} src={FaUser} roundedCircle className="ms-3" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something Else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
