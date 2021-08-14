import React, { Component } from 'react';

import Moment from 'react-moment';
import { Card } from 'react-bootstrap';

export default class CardFooter extends Component {
    render() {
        const created = this.props.passedData;

        return (
            <Card.Footer>
                <small className="text-muted">
                    Uploaded <Moment format="YYYY-MM-DD HH:mm">{created}</Moment>
                </small>
            </Card.Footer>
        );
    }
}
