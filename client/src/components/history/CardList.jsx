import React, { Component } from 'react';

import { Row } from 'react-bootstrap';

import Card from './Card';

export default class CardList extends Component {
    render() {
        const images = this.props.passedData;

        const list = images.map(image =>
            <Card key={image.hash} passedData={image} />
        );
        
        return (
            <Row xs={1} md={2} lg={3} className="justify-content-center">
                {list}
            </Row>
        );
    }
}
