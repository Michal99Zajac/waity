import React from 'react';
import './button.sass'

export function Button(props) {
    const className = props.className === 'wi-primary' ? 'wi-primary' : 'wi-second'

    return (
        <button
        onClick={props.onClick} 
        className={`wi-button ${className}`}
        disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
