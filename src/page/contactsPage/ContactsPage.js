import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const ContactsPage = () => {
const [input, setInput] = useState('');

    const dispatch = useDispatch();
    const title = useSelector(state => state.contactsTitle)
    const withParams = () =>{
        dispatch({
            type: "WITH_PARAMS",
            payload: 'hello geeks'
        })
    }
    const addTitle = () => {
        dispatch({
            type: 'FROM_INPUT',
            payload: input
        })
        setInput('');
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>---------------------------</p>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addTitle}>add</button>
        </div>
    );
};

export default ContactsPage;