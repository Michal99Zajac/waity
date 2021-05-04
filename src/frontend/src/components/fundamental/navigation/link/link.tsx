import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styles from './link.module.sass'


type LinkTypes = {
  to: string,
  label: string,
  color?: 'blue' | 'yellow' | 'black' | 'grey',
  className?: string
}

/**
 * Link Component - Links take users to another place
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - label (string) - text inside link
 * - color (string) - color of link
 * - className (string) - additional class for component
 * @returns JSX Link Component
 */
export function Link(props: LinkTypes): JSX.Element {
  const color = props.color ? props.color : 'grey'

  return (
    <RouterLink
      className={`
        ${styles.link}
        ${styles[color]}
        ${props.className ? props.className : ''}
      `}
      to={props.to}
    >
      {props.label}
    </RouterLink>
  )
}
