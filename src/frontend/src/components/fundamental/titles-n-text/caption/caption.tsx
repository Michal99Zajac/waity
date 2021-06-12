import React from 'react'
import styles from './caption.module.sass'


type CaptionTypes = {
  content: string,
  size?: 's' | 'm' | 'l',
  color?: 'white' | 'black' | 'grey' | 'blue' | 'yellow',
  className?: string
}

/**
 * Caption Component - text size is smaller than the recommended size for general reading
 * 
 * @param {object} props Object with props like
 * - content (string) - content of caption
 * - size (string) - size of Caption
 * - color (string) - color of the caption
 * - className (string) - additional class for Caption component
 * @returns JSX Caption Component
 */
export function Caption(props: CaptionTypes): JSX.Element {
  return (
    <p className={`
      ${styles.caption}
      ${props.size ? styles[props.size] : styles.m}
      ${props.className ? props.className : ''}
      ${styles[props.color ?? 'grey']}
    `}>
      {props.content}
    </p>
  )
}
