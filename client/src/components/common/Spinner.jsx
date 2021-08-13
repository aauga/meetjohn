import React from 'react';

import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const StyledSpinner = styled(Spinner)`
    position: fixed;
    top: 50%;
    left: 50%;
`;

export default function SpinnerComponent() {
    return <StyledSpinner animation="border"/>;
}
