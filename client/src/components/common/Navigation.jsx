import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand href="/">MeetJohn</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/history">History</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}