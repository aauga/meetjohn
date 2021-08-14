import React, { Component } from 'react';

import { Button, Spinner } from 'react-bootstrap';

export default class SubmitButton extends Component {
    render() {
        const formSubmitted = this.props.passedData;

        let element = 'Submit';

        if(formSubmitted) {
            element = <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
        }

        return <Button variant="primary" type="submit" disabled={formSubmitted}>{element}</Button>;
    }
}