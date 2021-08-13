import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class ObjectList extends Component {
    render() {
        const { objects } = this.props;

        if(!objects)
        {
            return <ListGroup.Item>No objects detected</ListGroup.Item>;
        }

        return (objects.map(object =>
            <ListGroup.Item key={object.name}>
                {object.name} was detected {object.times} times
            </ListGroup.Item>)
        );
    }
}
