import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "./Layout.css";

function Layout() {
    return (
        <Row className="layout">
            <Col md={3} className="sidebar-column">
                <Sidebar />
            </Col>
            <Col md={9} className="main-content-column outlet">
                <Outlet />
            </Col>
        </Row>
    );
}

export default Layout;

