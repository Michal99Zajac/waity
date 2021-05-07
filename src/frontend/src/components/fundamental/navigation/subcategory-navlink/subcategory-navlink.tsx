import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ArrowSvg } from '../../../../assets/svg/basic/arrow-right.svg'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import styles from './subcategory-navlink.module.sass'


type SubcategoryNavlinkTypes = {
  to: string,
  label: string,
  className?: string,
  activeClassName?: string
}

/**
 * SubcategoryNavlink Component - navlink for choose category of forms
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - label (string) - label of link
 * - activeClassName (string) - additional active class for navlink
 * - className (string) - additional class for component
 * @returns JSX SubcategoryNavlink Component
 */
export function SubcategoryNavlink(props: SubcategoryNavlinkTypes): JSX.Element {
  return (
    <NavLink
      className={`${styles.subNavlink} ${props.className ? props.className : ''}`}
      activeClassName={`${styles.active} ${props.activeClassName ? props.activeClassName : ''}`}
      to={props.to}
    >
      <Paragraph color='black' size='xl'>{props.label}</Paragraph>
      <ArrowSvg className={styles.arrow} />
    </NavLink>
  )
}
