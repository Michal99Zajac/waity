import React from 'react';
import './button.sass'

export function Button(props) {

    return (
        <button onClick={props.onClick} style={{backgroundColor: props.color}}>{props.msg}</button>
    )
}
