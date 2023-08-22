import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slices/messageSlice';

function Child1() {
    const inputRef = useRef(null);

     // UseDisptach() hook returns a function that can be used to dispatch actions.
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const inputTextValue = inputRef.current.value;

        // Dispatching the `setMessage` action with the input text value as the payload.
        dispatch(setMessage(inputTextValue));
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}/>
                <input type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    );
}

export default Child1;