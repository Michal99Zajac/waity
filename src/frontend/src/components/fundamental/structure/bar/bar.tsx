import React from 'react'
import styles from './bar.module.sass'


type BarTypes = {
  color?: 'white' | 'blue' | 'yellow' | 'black' | 'grey',
  margin?: 's' | 'm' | 'l' | 'xl'
}

/**
 * Bar Component - line that defines a thematic break
 * 
 * @param {object} props Object with props like
 * - color (string) - color of line
 * - margin (string) - top and bottom margin of line
 * @returns JSX Bar Component
 */
export function Bar(props: BarTypes): JSX.Element {
  return (
    <hr className={`
      ${styles.bar}
      ${props.color ? styles[props.color] : styles.white}
      ${props.margin ? styles[props.margin] : styles.m}
    `} />
  )
}
