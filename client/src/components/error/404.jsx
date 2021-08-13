import React from 'react';

import styled from 'styled-components';

import image from './404.gif';

export default function ErrorMessage() {
    const StyledImage = styled.img`
        width: 40%;
    `;

    return (
        <div className="text-center">
            <h2>404 Not Found</h2>
            <StyledImage src={image} alt="Courage The Cowardly Dog"/>
        </div>
    );
}
