import React, { Component } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Card from './Card.jsx';
import axios from 'axios';

export default class History extends Component {
    constructor()
    {
        super();
        this.state = {
            images: []
        };
    }

    async componentDidMount() {
        document.title = 'MeetJohn - History';
        
        try {
            const imgData = await axios.get('http://localhost:5000/api/history');
            this.setState({ images: imgData.data });
        } catch (error) {
            console.error(error);
            this.props.history.push("/error");
        }
    }

    render()
    {
        const data = this.state.images;

        if(Object.keys(data).length === 0 && data !== '')
        {
            return(<Spinner style={{position: 'fixed', left: '50%'}} animation="border" />);
        }
        else if(data === '')
        {
            return(<h2 className="text-center">There are no images.</h2>);
        }

        const { images } = this.state;

        function CardList() {
            const list = images.map(image => <Card key={image.hash} data={image}/>);
            return (<Row xs={1} md={2} lg={3} className="justify-content-center">{list}</Row>);
        }

        return (
            <>
            <h2 className="text-center">History</h2>
            <CardList/>
            </>
        );
    }
}