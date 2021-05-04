import React from 'react'
import { ReactComponent as StarFill } from '../../../../assets/svg/basic/star-fill.svg'
import { ReactComponent as StarEmpty } from '../../../../assets/svg/basic/star-empty.svg'
import styles from './star.module.sass'


type StarTypes = {
  value: number,
  rate: number,
  setRate: Function,
  className?: string
}

/**
 * Star Component - button for set star rate
 * 
 * @param {object} props Object with props like
 * - value (number) - value of component
 * - rate (number) - rate of whole higher component
 * - setRate (func) - function for set rate to value of component
 * - className (string) - additional class for component
 * @returns JSX Star Component
 */
export function Star(props: StarTypes): JSX.Element {
  const value = props.value

  return (
    <>
      { props.value <= props.rate ?
        <StarFill onClick={() => props.setRate(value)} className={`${styles.star} ${props.className ? props.className : ''}`} /> :
        <StarEmpty onClick={() => props.setRate(value)} className={`${styles.star} ${props.className ? props.className : ''}`} />
      }
    </>
  )
}
