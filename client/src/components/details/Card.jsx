import React, { Component } from 'react';

import styled from 'styled-components';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

import { CardFooter } from '../';
import Objects from './Objects';
import CardForm from './CardForm';

const Image = styled(Card.Img)`
    height: 100%;
`;

export default class CardComponent extends Component {
    render() {
        const stateReference = {
            hash: this.props.passedData.state.hash,
            error: this.props.passedData.errorHandling
        };

        const { url, objects, created } = this.props.passedData.state.data;

        return (
            <Card>
                <Row className="g-0">
                    <Col md={4}>
                        <Image variant="top" src={url} />
                    </Col>
                    
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>Objects</Card.Title>

                            <ListGroup variant="flush">
                                <Objects passedData={objects} />
                            </ListGroup>

                            <CardForm passedData={stateReference} />
                        </Card.Body>

                        <CardFooter passedData={created} />
                    </Col>
                </Row>
            </Card>
        );
    }
}
