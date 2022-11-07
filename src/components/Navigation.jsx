import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="mt-3">
            <Container>
                <Navbar.Brand href="#home" className="fs-3" style={{ color: "#F05830" }}>
                    Toko Ikan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-4">
                        <Nav.Link href="#Beranda" style={{ color: "#F05830" }}>
                            Beranda
                        </Nav.Link>
                        <Nav.Link href="#Keunggulan">Keunggulan</Nav.Link>
                        <Nav.Link href="#Fitur aplikasi">Fitur aplikasi</Nav.Link>
                        <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto fs-5">
                        <Button variant="danger">Download</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
