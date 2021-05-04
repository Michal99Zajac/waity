import React from 'react'
import { NavLink as RouterNavlink } from 'react-router-dom'
import styles from './navlink.module.sass'


type NavlinkTypes = {
  to: string,
  label: string,
  alternative?: boolean,
  className?: string
}

/**
 * Navlink Component - simple navigation link
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - label (string) - text inside a navlink
 * - alterntive (bool) - indicates if navlink have alternative style
 * - className (string) - additional class for component
 * @returns JSX Navlink Component
 */
export function Navlink(props: NavlinkTypes): JSX.Element {
  return (
    <RouterNavlink
      activeClassName={styles.active}
      className={`
        ${styles.navlink}
        ${props.alternative ? styles.alternative : ''}
        ${!isNaN(+props.label) ? styles.circle : ''}
        ${props.className ? props.className : ''}
      `}
      to={props.to}
    >
      {props.label}
    </RouterNavlink>
  )
}
