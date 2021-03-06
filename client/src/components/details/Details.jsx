import React, { Component } from 'react';

import axios from 'axios';

import { Error, Error404, Spinner } from '../';
import Card from './Card';

export default class Details extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            hash: this.props.match.params.hash,
            data: {},
            error: false
        };
        
        this.handleError = this.handleError.bind(this);
    }

    handleError() {
        this.setState({ error: true });
    }

    async componentDidMount() {
        document.title = 'MeetJohn - Details';
        
        try {
            const response = await axios.get(`http://localhost:5000/api/details/${this.state.hash}`);
            this.setState({ data: response.data });
        } catch (error) {
            console.error(error);
            this.setState({ error: true });
        }
    }

    render() {
        if(this.state.error) {
            return(<Error/>);
        }

        const stateReference = {
            state: this.state,
            handleError: this.handleError
        }

        const { data } = this.state;

        // Check if data was loaded
        if(Object.keys(data).length === 0 && data !== '')
        {
            return <Spinner/>;
        }
        else if(data === '')
        {
            return <Error404/>;
        }

        return (
            <>
            <h2 className="mb-3 text-center">Details</h2>
            <Card passedData={stateReference} />
            </>
        );
    }
}
