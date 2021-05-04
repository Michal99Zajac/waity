import React from 'react'
import styles from './paragraph.module.sass'


type ParagraphTypes = {
  children: string,
  size?: 's' | 'm' | 'l' | 'xl' | 'xll',
  bold?: boolean,
  color?: 'black' | 'grey' | 'white',
  className?: string
}

/**
 * Paragraph Component - regular text for general reading
 * 
 * @param {object} props Object with props like
 * - children (string) - content of paragraph
 * - size (string) - size of paragraph
 * - bold (bool) - indicates the size of paragraph
 * - color (string) - color of paragraph
 * - className (string) - additional class for component
 * @returns JSX Paragraph Component
 */
export function Paragraph(props: ParagraphTypes): JSX.Element {
  return (
    <p className={`
      ${styles.paragraph}
      ${props.size ? styles[props.size] : styles['m']}
      ${props.bold ? styles.bold : ''}
      ${props.color ? styles[props.color] : styles.grey}
      ${props.className ? props.className : ''}
    `}>
      {props.children}
    </p>
  )
}
