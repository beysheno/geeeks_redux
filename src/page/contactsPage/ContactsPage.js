import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {withParamsAction} from "../../redux/actions";

const ContactsPage = () => {
const [input, setInput] = useState('');

    const dispatch = useDispatch();
    const title = useSelector(state => state.contactsReducer.contactsTitle)
    const withParams = () =>{
        dispatch(withParamsAction('hello geeks'))
    }
    const addTitle = () => {
        dispatch(withParamsAction(input))
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