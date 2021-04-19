import React from 'react'
import styles from './display-text.module.sass'


type DisplayTextTypes = {
  text: string
}

/**
 * DisplayText Component - Component to signin and signup pages.
 * Use them to create impact when the main goal is visual storytelling
 * 
 * @param {object} props Object with props like
 * - text (string) - text of bolded header
 * @returns JSX DisplayText Component
 */
export function DisplayText(props: DisplayTextTypes): JSX.Element {
  return (
    <h1 className={styles.displayText}>{props.text}</h1>
  )
}
