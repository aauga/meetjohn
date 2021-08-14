import React, { Component } from 'react';

import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { InputGroup, FormControl } from 'react-bootstrap';

import SubmitButton from './SubmitButton';

class SubmitForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: '',
            formSubmitted: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        this.setState({ formSubmitted: true });

        try {
            const response = await axios.post('http://localhost:5000/api/upload', this.state);
            this.props.history.push(`/details/${response.data.hash}`);
        } catch (error) {
            console.error(error);
            this.props.handleError();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <FormControl
                        type="url"
                        name="imageUrl"
                        required="required"
                        placeholder="Enter image URL"
                        aria-label="Image URL"
                        onChange={this.handleChange}
                        disabled={this.state.formSubmitted}
                    />
                    <SubmitButton passedData={this.state.formSubmitted} />
                </InputGroup>
            </form>
        );
    }
}

export default withRouter(SubmitForm);