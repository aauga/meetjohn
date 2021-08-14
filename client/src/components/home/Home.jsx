import React, { Component } from 'react';

import axios from 'axios';
import { InputGroup, Button, FormControl, Spinner } from 'react-bootstrap';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            formSubmitted: false
        };
    }

    componentDidMount() {
        document.title = 'MeetJohn - Home';
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        if(this.state.imageUrl !== '')
        {
            this.setState({ formSubmitted: true });

            try {
                const response = await axios.post('http://localhost:5000/api/upload', this.state);
                this.props.history.push(`/details/${response.data.hash}`);
            } catch (error) {
                console.error(error);
                this.props.history.push("/error");
            }
        }
    }

    render() {
        if(this.state.formSubmitted) {
            return (
                <>
                <h2 className="mb-3 text-center">Upload an image</h2>
    
                <form onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl
                            type="url"
                            name="imageUrl"
                            placeholder="Enter image URL"
                            aria-label="Image URL"
                            onChange={this.handleChange}
                            disabled
                        />
                        <Button variant="primary" type="submit" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                        </Button>
                    </InputGroup>
                </form>
                </>
            );
        }

        return (
            <>
            <h2 className="mb-3 text-center">Upload an image</h2>

            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <FormControl
                        type="url"
                        name="imageUrl"
                        placeholder="Enter image URL"
                        aria-label="Image URL"
                        onChange={this.handleChange}
                    />
                    <Button variant="primary" type="submit">Submit</Button>
                </InputGroup>
            </form>
            </>
        );
    }
}