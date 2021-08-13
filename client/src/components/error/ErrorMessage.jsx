import React from 'react';

import styled from 'styled-components';

import image from './error.gif';

export default function ErrorMessage() {
    const StyledImage = styled.img`
        width: 40%;
    `;

    return (
        <div className="text-center">
            <h2>Oh no! Something went wrong... :(</h2>
            <h5 className="mt-2 mb-4">The developer is fixing this right now...</h5>
            <StyledImage src={image} alt="Courage The Cowardly Dog"/>
        </div>
    );
}
