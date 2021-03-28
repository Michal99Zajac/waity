import React from 'react'
import styles from './button.module.sass'

export function Button(props) {
  const className = props.className === 'primary' ? styles.primary : styles.second

  return (
    <button
      onClick={props.onClick} 
      className={className}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
