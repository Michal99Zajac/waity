import React from 'react'
import styles from './table.module.sass'


type TableTypes = {
  width: number,
  height: number,
  id: number,
  selected?: boolean
}

/**
 * Table Component - visualization of table in restaurant
 * 
 * @param {object} props Object with props like
 * - width (number) - number of seats on width side of table
 * - height (number) - number of seats on height side of table
 * - id (number) - id of table
 * - selected (bool) - indicated if table is selected
 * @returns JSX Table Component
 */
export function Table(props: TableTypes): JSX.Element {
  return (
    <div
    style={{
      height: `${props.height * 2.5}rem`,
      width: `${props.width * 2.5}rem`
    }}
    className={`${styles.table} ${props.selected ? styles.selected : ''}`}
    >
      <p>{props.id}</p>
    </div>
  )
}
