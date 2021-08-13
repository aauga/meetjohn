import React, { Component } from 'react';
import Moment from 'react-moment';
import { Card, Button, Col } from 'react-bootstrap';
import '../styles.css';

export default class ImageCard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: props.data,
        }
    }

    render()
    {
        const { data } = this.state;

        return (
            <Col className="mt-4 col-display">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={data.url} style={{ height:'250px' }} />
                    <Card.Footer>
                        <small className="text-muted">Uploaded <Moment format="YYYY-MM-DD HH:mm">{data.created}</Moment></small>
                    </Card.Footer>
                    <Card.Body className="p-0">
                        <form action={`/details/${data.hash}`}>
                            <Button type="submit" variant="primary" className="btn-full-width">Details</Button>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}