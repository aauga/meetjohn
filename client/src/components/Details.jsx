import React, { Component } from 'react';
import { ListGroup, Button, Card, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Moment from 'react-moment';

export default class Details extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            hash: this.props.match.params.hash,
            data: {},
        }
    }

    async componentDidMount() {
        document.title = 'MeetJohn - Details';
        
        try {
            const imgData = await axios.get(`http://localhost:5000/api/details/${this.state.hash}`);
            this.setState({ data: imgData.data });
        } catch (error) {
            console.error(error);
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.delete(`http://localhost:5000/api/details/${this.state.hash}?_method=DELETE`);
            this.props.history.push('/history');
        } catch (error) {
            console.error(error);
            this.props.history.push("/error");
        }
    }

    render()
    {
        const data = this.state.data;

        if(Object.keys(data).length === 0 && data !== '')
        {
            return(<Spinner animation="border" style={{position: 'fixed', left: '50%'}}/>);
        }
        else if(data === '')
        {
            return(<h2 className="text-center">There is no such image.</h2>);
        }

        const { url, objects, created } = this.state.data;
        
        function ObjectList() {
            if(!objects)
            {
                return(<><ListGroup.Item>No objects detected</ListGroup.Item></>);
            }

            const list = objects.map(object =>
                <ListGroup.Item key={object.name}>{object.name} was detected {object.times} times</ListGroup.Item>
            );

            return (<>{list}</>);
        }

        return (
            <>
            <h2 className="mb-3 text-center">Details</h2>

            <Card>
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img variant="top" src={url} style={{height: '100%'}} />
                    </Col>
                    
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>Objects</Card.Title>
                            <ListGroup variant="flush">
                                <ObjectList/>
                            </ListGroup>

                            <form onSubmit={this.handleSubmit}>
                                <Button variant="danger" type="submit" className="mt-2" style={{width: '100%'}}>Delete</Button>
                            </form>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">
                                Uploaded <Moment format="YYYY-MM-DD HH:mm">{created}</Moment>
                            </small>
                        </Card.Footer>
                    </Col>
                </Row>
            </Card>
            </>
        );
    }
}
