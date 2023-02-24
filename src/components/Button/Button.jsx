import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css"

const Button = (props) => {
    const {text, bgColor, link} = props;
    const buttonClasses = `cardButton ${bgColor}`

    return (
        <button className='button'>
            <Link to={link} className={buttonClasses}>{text}</Link>
        </button>
    );
};

export default Button;