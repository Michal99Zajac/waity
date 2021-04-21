import React from 'react'
import styles from './caption.module.sass'


type CaptionTypes = {
  content: string
}

/**
 * Caption Component - text size is smaller than the recommended size for general reading
 * 
 * @param {object} props Object with props like
 * - content (string) - content of caption
 * @returns JSX Caption Component
 */
export function Caption(props: CaptionTypes): JSX.Element {
  return (
    <p className={styles.caption}>{props.content}</p>
  )
}
