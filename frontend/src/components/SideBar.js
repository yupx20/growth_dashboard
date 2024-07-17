import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { FaTachometerAlt, FaCog, FaTable, FaMap, FaFingerprint, FaListAlt, FaGlobe, FaUserCircle, FaFileAlt, FaDownload } from 'react-icons/fa';
import '../styling/SideBar.css';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className={`sidebar ${showSidebar ? 'shown' : ''}`}>
                <Container fluid className="p-4">
                    <Row className="text-center mb-4">
                        <Col>
                            <a href="https://tlt.co.id/index.html#" target="_blank" rel="noreferrer">
                                <h6 className="text-gray">TELKOMSEL</h6>
                            </a>
                        </Col>
                    </Row>
                    <Nav className="flex-column">
                        <Nav.Item className="mb-2">
                            <NavLink to="/home" exact className="nav-link" activeClassName="active-link">
                                <FaTachometerAlt size="1.5em" className="mr-2" /> Dashboard
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <NavLink to="/settings" className="nav-link" activeClassName="active-link">
                                <FaCog size="1.5em" className="mr-2" /> Settings
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <NavLink to="/tables" className="nav-link" activeClassName="active-link">
                                <FaTable size="1.5em" className="mr-2" /> Tables
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <NavLink to="/maps" className="nav-link" activeClassName="active-link">
                                <FaMap size="1.5em" className="mr-2" /> Maps
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/login" target="_blank" rel="noreferrer" className="nav-link">
                                <FaFingerprint size="1.5em" className="mr-2" /> Login
                            </a>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/register" target="_blank" rel="noreferrer" className="nav-link">
                                <FaListAlt size="1.5em" className="mr-2" /> Register
                            </a>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/landing" target="_blank" rel="noreferrer" className="nav-link">
                                <FaGlobe size="1.5em" className="mr-2" /> Landing Page
                            </a>
                        </Nav.Item>
                        <Nav.Item className="mb-2">
                            <a href="https://demos.creative-tim.com/material-tailwind-kit-react/#/profile" target="_blank" rel="noreferrer" className="nav-link">
                                <FaUserCircle size="1.5em" className="mr-2" /> Profile Page
                            </a>
                        </Nav.Item>
                    </Nav>
                    <Nav className="flex-column mt-auto">
                        <Nav.Item className="mb-2 bg-info text-white rounded">
                            <a href="https://material-tailwind.com/documentation/quick-start" target="_blank" rel="noreferrer" className="nav-link text-white">
                                <FaFileAlt size="1.5em" className="mr-2" /> Documentation
                            </a>
                        </Nav.Item>
                        <Nav.Item className="bg-purple text-white rounded">
                            <a href="https://www.creative-tim.com/product/material-tailwind-dashboard-react" target="_blank" rel="noreferrer" className="nav-link text-white text-center">
                                <FaDownload size="1.5em" className="mr-2" /> Free Download
                            </a>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        </>
    );
}
