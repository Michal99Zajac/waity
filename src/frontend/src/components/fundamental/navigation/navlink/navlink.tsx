import React from 'react'
import { NavLink as RouterNavlink } from 'react-router-dom'
import styles from './navlink.module.sass'


type NavlinkTypes = {
  to: string,
  label: string,
  alternative?: boolean
}

/**
 * Navlink Component - simple navigation link
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - label (string) - text inside a navlink
 * - alterntive (bool) - indicates if navlink have alternative style
 * @returns JSX Navlink Component
 */
export function Navlink(props: NavlinkTypes): JSX.Element {
  return (
    <RouterNavlink
      activeClassName={styles.active}
      className={`${styles.navlink} ${props.alternative ? styles.alternative : ''}`}
      to={props.to}
    >
      {props.label}
    </RouterNavlink>
  )
}
