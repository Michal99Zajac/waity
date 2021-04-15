import React from 'react'
import styles from './Button.module.sass'


type ButtonTypes = {
  desc: string
  type?: 'submit' | 'button'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  small?: boolean
  color?: 'blue' | 'yellow' | 'black' | undefined
  disabled?: boolean
}


/**
 * Button Component - Plain buttons used for less important or 
 * less commonly used actions
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the button is disabled
 * - desc (string) - content of a button
 * - type (string) - one of two types of button
 * - onClick (func) - function to use for button
 * - small (bool) - indicates size of button
 * - color (string) - color type of button
 * @returns JSX Button Component
 */
export function Button(props: ButtonTypes): JSX.Element {
  let className = props.small ? styles.small : ''
  className = props.color ? `${className} ${styles[props.color]}` : className

  return (
    <button
      className={props.small ? `${styles.button} ${className}` : styles.button }
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.desc}
    </button>
  )
}
