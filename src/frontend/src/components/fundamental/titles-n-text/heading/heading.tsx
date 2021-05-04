import React from 'react'
import styles from './heading.module.sass'


type HeadingTypes = {
  label: string,
  size?: 's' | 'm' | 'l' | 'xl' | 'xll',
  special?: boolean,
  color?: 'yellow' | 'black' | 'blue' | 'white' | 'grey',
  className?: string
}

/**
 * Heading Component - the titles of each major section of a page in the interface.
 * 
 * @param {object} props Object with props like
 * - label (string) - text of header
 * - size (string) - size of heading
 * - special (bool) - determines special font
 * - color (string) - determines color of heading
 * - className (string) - additional class for component
 * @returns JSX Heading Component
 */
export function Heading(props: HeadingTypes): JSX.Element {
  return (
    <h1 className={`
      ${styles.heading}
      ${props.size ? styles[props.size] : styles.m}
      ${props.special ? styles.special : ''}
      ${props.color ? styles[props.color] : styles.blue}
      ${props.className ? props.className : ''}
    `}>
      {props.label}
    </h1>
  )
}
