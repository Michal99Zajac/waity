import React from 'react'
import styles from './reservation-tab.module.sass'
import { Table } from '../../structure/table/table'
import { Spots } from '../../structure/spots/spots'
import { InfoLabel } from '../../titles-n-text/info-label/info-label'


type ReservationTabTypes = {
  setState: Function,
  state: string,
  value: string,
  id: string,
  tableId: number,
  status: 'available' | 'booked' | 'partial',
  facilities: string[],
  table: {width: number, height: number},
  spots: {quantity: number, places: number}[],
  className?: string
}

/**
 * ReservationTab Component - card for choose table to reservations
 * 
 * @param {object} props Object with props like
 * - setState (string) - function for change state
 * - state (string) - state which will be change
 * - value (string) - value which will be set to state
 * - id (string) - unique id for component
 * - tableId (number) - number of table
 * - status (string) - status of table
 * - facilities (array[string]) - facilities for table
 * - table (object) - table dimensions
 * - spots (array[object]) - array of spots quantity at the table and places on spot
 * - className (string) - additional class for component
 * @returns JSX ReservationTab Component
 */
export function ReservationTab(props: ReservationTabTypes): JSX.Element {
  return (
    <label
      className={`${styles.reservationTab} ${props.className ? props.className : ''}`}
      htmlFor={props.id}
    >
      <input
        onChange={(e) => props.setState(e.target.value)}
        id={props.id}
        type='radio'
        value={props.value}
        name='table'
      />
      <div className={styles.container}>
        <Table width={props.table.width} height={props.table.height} id={props.tableId} className={styles.selected}/>
        <div className={styles.labels}>
          <InfoLabel label={props.status} status={props.status} />
        </div>
        <div className={styles.spots}>
          <div className={styles.facilities}>
            { props.facilities.map(f => <InfoLabel key={f} label={f} status='inform' />)}
          </div>
          <Spots className={styles.selected} spots={props.spots} />
        </div>
      </div>
    </label>
  )
}
