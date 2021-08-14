import React, { Component } from 'react';

import styled from 'styled-components';
import { Card, Button, Col } from 'react-bootstrap';

import { CardFooter } from '../';

const StyledCard = styled(Card)`
    width: 20rem;
`;

const StyledImage = styled(Card.Img)`
    height: 250px;
`;

const StyledColumn = styled(Col)`
    display: flex;
    justify-content: center;
    padding: 0 !important;
`;

const StyledButton = styled(Button)`
    width: 100%;
    border-radius: 0 0 0.25rem 0.25rem;
`;

export default class ImageCard extends Component {
    render()
    {
        const { hash, url, created } = this.props.passedData;

        return (
            <StyledColumn className="mt-4">
                <StyledCard>
                    <StyledImage variant="top" src={url} />

                    <CardFooter passedData={created} />

                    <Card.Body className="p-0">
                        <form action={`/details/${hash}`}>
                            <StyledButton type="submit" variant="primary">Details</StyledButton>
                        </form>
                    </Card.Body>
                </StyledCard>
            </StyledColumn>
        );
    }
}