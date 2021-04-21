import React from 'react'
import styles from './svg-button.module.sass'


type SvgButtonTypes = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  svg: JSX.Element,
  disabled: boolean,
  color: 'yellow' | 'blue' | 'white'
}

/**
 * SvgButton Component - buttons used for less important or 
 * less commonly used actions and have only svg
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the button is disabled
 * - svg (JSX.Element) - content of a button
 * - onClick (func) - function to use for button
 * - color (string) - color type of button
 * @returns JSX SvgButton Component
 */
export function SvgButton(props: SvgButtonTypes): JSX.Element {
  return (
    <button
      disabled={props.disabled}
      className={`${styles.svgButton} ${props.color ? styles[props.color] : styles.blue}`}
      onClick={props.onClick}
    >
      {props.svg}
    </button>
  )
}
