'use client';

import { useEffect } from "react";

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2> Something went wrong</h2>
            <button
            // Attempt tp recover by trying to re-render the segment
            onClick={() => reset()}>
                Try again
            </button>
        </div>
    );
}

export default Error;