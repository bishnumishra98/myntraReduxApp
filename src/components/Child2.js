import React from 'react';
import { useSelector } from 'react-redux';

function Child2() {

    // Using the `useSelector` hook to subscribe to the `message` state variable.
    const message = useSelector(state => state.messageReducer.message);

    return (
        <div>
            The data from Child1 is: {message}
        </div>
    );
}

export default Child2;