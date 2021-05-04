import React from 'react'
import styles from './question-mark.module.sass'


type QuestionMarkTypes = {
  msg: string,
  size?: 'small' | 'medium' | 'large',
  className?: string
}

/**
 * QuestionMark Component - element for short feedback message
 * 
 * @param {object} props Object with props like
 * - msg (string) - message of the questionMark
 * - size (string) - size of component
 * - className (string) - additional class for component
 * @returns JSX QuestionMark Component
 */
export function QuestionMark(props: QuestionMarkTypes): JSX.Element {
  return (
    <div className={`
      ${styles.questionMark}
      ${props.size ? styles[props.size] : styles.medium}
      ${props.className ? props.className : ''}
    `}>
      <span className={styles.mark}>?</span>
      <p className={styles.answear}>{props.msg}</p>
    </div>
  )
}
