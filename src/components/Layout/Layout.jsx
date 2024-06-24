import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import MyFooter from '../MyFooter/MyFooter';
import "./Layout.css";

function Layout() {
    return (
        <Row className="layout g-0">
            <Col md={3} className="sidebar-column">
                <Sidebar />
            </Col>
            <Col md={9} className="main-content-column">
                <div className="outlet">
                    <Outlet />
                </div>
                <MyFooter />
            </Col>
        </Row>
    );
}

export default Layout;
