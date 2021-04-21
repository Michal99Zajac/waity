import React from 'react'
import styles from './section-label.module.sass'


type SectionLabelTypes = {
  label: string,
  firm?: boolean,
  size?: 's' | 'm' | 'l' | 'xl'
}

/**
 * SectionLabel Component - text for description form section
 * 
 * @param {object} props Object with props like
 * - label (string) - text of label
 * - firm (bool) - indicates if label is for firm side
 * - size (string) - indicates the size of the label
 * @returns JSX SectionLabel Component
 */
export function SectionLabel(props: SectionLabelTypes): JSX.Element {
  return (
    <p className={`${styles.selectionLabel}
                  ${props.firm ? styles.firm : ''}
                  ${props.size ? styles[props.size] : styles.m}
    `}>
      {props.label}
    </p>
  )
}
