import React from 'react'
// import { CustomButton } from '../../styles/button.style';

const STYLES = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--grey--solid",
    "btn--danger--solid",
    "btn--green--solid"
];

const SIZES = ["btn--medium", "btn--small", "btn--large", "btn--table"];


function Button({children, type, onClick, buttonStyle, buttonSize}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={onClick} type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`} >
            {children}
        </button>
    )
}

export default Button