import React from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../../titles-n-text/heading/heading'
import styles from './section-link.module.sass'


type SectionLinkTypes = {
  to: string,
  src: string,
  alt: string,
  section: string,
  className?: string
}

/**
 * SectionLink Component - simple navigation link
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - src (string) - path to the background image
 * - alt (string) - alt text if image wont display
 * - section (string) - label of link
 * - className (string) - additional class for component
 * @returns JSX SectionLink Component
 */
export function SectionLink(props: SectionLinkTypes): JSX.Element {
  return (
    <Link
      className={`${styles.sectionLink} ${props.className ? props.className : ''}`}
      to={props.to}
    >
      <div className={styles.conatiner}>
        <img src={props.src} alt={props.alt}></img>
        <Heading className={styles.heading} color='white' label={props.section}/>
      </div>
    </Link>
  )
}
