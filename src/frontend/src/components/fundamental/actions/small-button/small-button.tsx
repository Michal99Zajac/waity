import React from 'react'
import styles from './small-button.module.sass'


type SmallButtonTypes = {
  svg: JSX.Element,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  disabled: boolean,
  color?: 'white' | 'grey' | undefined
}

/**
 * SmallButton Component - Plain buttons used for less important or 
 * less commonly used actions and have only svg as content
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the button is disabled
 * - svg (JSX.Element) - content of a button
 * - onClick (func) - function to use for button
 * - color (string) - color type of button
 * @returns JSX Button Component
 */
export function SmallButton(props: SmallButtonTypes): JSX.Element {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${styles.smallButton} ${props.color ? styles[props.color] : ''}`}
    >
      {props.svg}
    </button>
  )
}
