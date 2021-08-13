import React, { Component } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const StyledButton = styled(Button)`
    width: 100%;
`;

class CardForm extends Component {
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.delete(`http://localhost:5000/api/details/${this.props.passedData.hash}?_method=DELETE`);
            this.props.history.push('/history');
        } catch (error) {
            console.error(error);
            this.props.passedData.error();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <StyledButton variant="danger" type="submit" className="mt-2">Delete</StyledButton>
            </form>
        );
    }
}

export default withRouter(CardForm);