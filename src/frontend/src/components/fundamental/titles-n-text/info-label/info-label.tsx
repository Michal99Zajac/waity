import React from 'react'
import styles from './info-label.module.sass'


type InfoLabelTypes = {
  label: string
}

/**
 * InfoLabel Component - text with special background to client inform
 * 
 * @param {object} props Object with props like
 * - label (string) - text of info label
 * @returns JSX InfoLabel Component
 */
export function InfoLabel(props: InfoLabelTypes): JSX.Element {
  return (
    <p className={styles.infoLabel}>{props.label}</p>
  )
}
