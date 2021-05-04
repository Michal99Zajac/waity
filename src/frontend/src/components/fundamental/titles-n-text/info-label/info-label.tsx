import React from 'react'
import styles from './info-label.module.sass'


type InfoLabelTypes = {
  label: string,
  status?: 'available' | 'booked' | 'partial' | 'inform' | 'none',
  size?: 's' | 'm' | 'l' | 'xl' | 'xll',
  className?: string
}

/**
 * InfoLabel Component - text with special background to client inform
 * 
 * @param {object} props Object with props like
 * - label (string) - text of info label
 * - status (string) - determines the color of the information
 * - size (string) - size of the infoLabel
 * - className (string) - additional class for component
 * @returns JSX InfoLabel Component
 */
export function InfoLabel(props: InfoLabelTypes): JSX.Element {
  return (
    <p className={`
      ${styles.infoLabel}
      ${props.status ? styles[props.status] : styles.none}
      ${props.size ? styles[props.size] : styles.m}
      ${props.className ? props.className : ''}
    `}>
      {props.label}
    </p>
  )
}
