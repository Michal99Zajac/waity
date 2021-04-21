import React from 'react'
import styles from './caption.module.sass'


type CaptionTypes = {
  content: string
}

export function Caption(props: CaptionTypes): JSX.Element {
  return (
    <p className={styles.caption}>{props.content}</p>
  )
}
