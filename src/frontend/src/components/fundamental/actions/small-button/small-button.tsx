import React from 'react'
import styles from './small-button.module.sass'


type SmallButtonTypes = {
  svg: JSX.Element,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean,
  color?: 'white' | 'grey' | 'blue' | 'yellow' | 'black' | undefined,
  className?: string
}

/**
 * SmallButton Component - Plain buttons used for less important or 
 * less commonly used actions and they are smaller then regular buttons
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the button is disabled
 * - svg (JSX.Element) - content of a button
 * - onClick (func) - function to use for button
 * - color (string) - color type of button
 * - className (string) - additional class for component
 * @returns JSX Button Component
 */
export function SmallButton(props: SmallButtonTypes): JSX.Element {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`
        ${styles.smallButton}
        ${props.color ? styles[props.color] : ''}
        ${props.className ? props.className : ''}
      `}
    >
      {props.svg}
    </button>
  )
}
