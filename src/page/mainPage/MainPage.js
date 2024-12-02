import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch();

    const changeTitle = () => {
        dispatch({
            type: "CHANGE_TITLE"
        })
    }
    const mainTitle = useSelector(state => state.title);
    return (
        <div>
            <h1>{mainTitle}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    );
};

export default MainPage;