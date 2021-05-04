import React from 'react'
import { Link } from 'react-router-dom'
import styles from './button-link.module.sass'


type ButtonLinkTypes = {
  to: string,
  content: string,
  color?: 'white' | 'black' | 'blue' | 'yellow' | 'grey',
  className?: string
}

/**
 * ButtonLink Component - Link that looks like a standard button
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - content (string) - text inside link
 * - color (string) - color of link
 * - className (string) - additional class for component
 * @returns JSX ButtonLink Component
 */
export function ButtonLink(props: ButtonLinkTypes): JSX.Element {
  return (
    <Link
      to={props.to}
      className={`
        ${styles.buttonLink}
        ${props.color ? styles[props.color] : styles.black}
        ${props.className ? props.className : ''}
      `}
    >
      {props.content}
    </Link>
  )
}
