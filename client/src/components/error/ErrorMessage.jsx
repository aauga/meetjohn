import React from 'react';
import image from './error.gif';

export default function ErrorMessage() {
    const imgWidth = {
        width: '40%',
    }

    return (
        <div className="text-center">
            <h2>Oh no! Something went wrong... :(</h2>
            <h5 className="mt-2 mb-4">The developer is fixing this right now...</h5>
            <img src={image} alt="Courage The Cowardly Dog" style={imgWidth}/>
        </div>
    );
}
