import React from 'react';

interface ButtonProps {
    buttonClass: string;
    text: string;
}

function Button(props: ButtonProps) {
    return (
        <button type="button" className={props.buttonClass}>{props.text}</button>
    );
}

export default Button;
