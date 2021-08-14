import React, { Component } from 'react';

import { Error } from '../';
import SubmitForm from './SubmitForm';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            error: false
        };

        this.handleError = this.handleError.bind(this);
    }

    handleError() {
        this.setState({ error: true });
    }

    componentDidMount() {
        document.title = 'MeetJohn - Home';
    }

    render() {
        if(this.state.error) {
            return <Error/>;
        }

        return (
            <>
            <h2 className="mb-3 text-center">Upload an image</h2>
            <SubmitForm handleError={this.handleError} />
            </>
        );
    }
}