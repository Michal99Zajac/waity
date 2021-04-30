import React from 'react'
import styles from './status-block.module.sass'


type StatusBlockTypes = {
  status: 'available' | 'booked' | 'clean',
  className?: string
}

/**
 * StatusBlock Component - block for visualization state of booking possibility
 * 
 * @param {object} props Object with props like
 * - status (string) - status of block for timeline
 * - className (string) - additional class for StatusBlock
 * @returns JSX StatusBlock Component
 */
export function StatusBlock(props: StatusBlockTypes): JSX.Element {
  return (
    <div className={`${styles.block} ${styles[props.status]} ${props.className}`}>
      {props.status}
    </div>
  )
}
