import React from 'react';

export default function Error() {
    const imgWidth = {
        width: '40%',
    }

    return (
        <div className="text-center">
            <h2>Oh no! Something went wrong... :(</h2>
            <h5 className="mt-2 mb-4">The developer is fixing this right now...</h5>
            <img src="./assets/error.gif" alt="Error" style={imgWidth}/>
        </div>
    );
}
