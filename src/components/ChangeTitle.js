import React from 'react';
import {useDispatch} from "react-redux";
import {asyncFuncAction} from "../redux/actions";

const ChangeTitle = () => {
    const dispatch = useDispatch();
    const changeAboutTitle = () => {
        dispatch({
            type: "CHANGE_ABOUT_TITLE",
        });
    }
    return (
        <div>
            {/*<button onClick={changeAboutTitle}>change about title</button>*/}
            <button onClick={()=> dispatch(asyncFuncAction())}>after 2 sec</button>
        </div>
    );
};

export default ChangeTitle;