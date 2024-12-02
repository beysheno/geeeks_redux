import React from 'react';
import {useSelector} from "react-redux";
import ChangeTitle from "../../components/ChangeTitle";


const AboutPage = () => {

    const aboutTitle = useSelector(state => state.aboutTitle);

    return (
        <h1>
            {aboutTitle}
        </h1>

    );
};

export default AboutPage;