import React from 'react'
import styles from './heading.module.sass'


type HeadingTypes = {
  label: string
}

/**
 * Heading Component - the titles of each major section of a page in the interface.
 * 
 * @param {object} props Object with props like
 * - label (string) - text of header
 * @returns JSX Heading Component
 */
export function Heading(props: HeadingTypes): JSX.Element {
  return (
    <h1 className={styles.heading}>{props.label}</h1>
  )
}
