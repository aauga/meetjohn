import React, { Component } from 'react';

import axios from 'axios';
import { Error, Spinner } from '../';

import CardList from './CardList';

export default class History extends Component {
    constructor()
    {
        super();
        this.state = {
            images: [],
            error: false
        };
    }

    async componentDidMount() {
        document.title = 'MeetJohn - History';
        
        try {
            const imgData = await axios.get('http://localhost:5000/api/history');
            this.setState({ images: imgData.data });
        } catch (error) {
            console.error(error);
            this.setState({ error: true });
        }
    }

    render()
    {
        if(this.state.error) {
            return(<Error/>);
        }

        const data = this.state.images;

        // Check if data was loaded
        if(Object.keys(data).length === 0 && data !== '')
        {
            return <Spinner/>;
        }
        else if(data === '')
        {
            return <h2 className="text-center">There are no images yet.</h2>;
        }

        const { images } = this.state;

        return (
            <>
            <h2 className="text-center">History</h2>
            <CardList passedData={images} />
            </>
        );
    }
}