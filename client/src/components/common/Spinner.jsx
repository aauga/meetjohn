import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

export default function SpinnerComponent() {
    const StyledSpinner = styled(Spinner)`
        position: fixed;
        top: 50%;
        left: 50%;
    `;

    return <StyledSpinner animation="border"/>;
}
