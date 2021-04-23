import React from 'react'
import styles from './info-label.module.sass'


type InfoLabelTypes = {
  label: string,
  status?: 'available' | 'booked' | 'partial' | 'inform' | 'none'
}

/**
 * InfoLabel Component - text with special background to client inform
 * 
 * @param {object} props Object with props like
 * - label (string) - text of info label
 * - status (string) - determines the color of the information
 * @returns JSX InfoLabel Component
 */
export function InfoLabel(props: InfoLabelTypes): JSX.Element {
  return (
    <p
      className={`${styles.infoLabel} ${props.status ? styles[props.status] : styles.none}`}
    >
      {props.label}
    </p>
  )
}
