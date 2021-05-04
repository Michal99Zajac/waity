import React from 'react'
import styles from './button.module.sass'


type ButtonTypes = {
  desc: string
  type?: 'submit' | 'button'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  small?: boolean
  color?: 'blue' | 'yellow' | 'black' | undefined
  disabled?: boolean,
  className?: string
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
 * - className (string) - additional class for component
 * @returns JSX Button Component
 */
export function Button(props: ButtonTypes): JSX.Element {
  let className = styles.button
  className = props.small ? `${styles.small} ${className}` : className
  className = props.color ? `${styles[props.color]} ${className}` : className

  return (
    <button
      className={`${className} ${props.className ? props.className : ''}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.desc}
    </button>
  )
}
