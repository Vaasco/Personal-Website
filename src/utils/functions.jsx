import React from 'react';

function LineBreaks({ count }) {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <br key={index} />
            ))}
        </>
    );
}

export default LineBreaks;
