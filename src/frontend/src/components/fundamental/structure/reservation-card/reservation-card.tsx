import React from 'react'
import { Table, TableTypes } from '../table/table'
import { Spots, Spot } from '../spots/spots'
import { Timeline, TimelineOrderBlockTypes } from '../../feedback/timeline/timeline'
import styles from './reservation-card.module.sass'

type ReservationCardTypes = {
  className?: string,
  orders: TimelineOrderBlockTypes[],
  table: TableTypes,
  spots: Spot[]
}

/**
 * ReservationCard Component - panel for visualization time of reservation during the day
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * - table (object) - see! Table Component
 * - spots (array) - see! Spots Component
 * - orders (array) - see! Timeline Component
 * @returns JSX ReservationCard Component
 */
export function ReservationCard(props: ReservationCardTypes): JSX.Element {
  return (
    <div className={`${styles.reservationCard} ${props.className ? props.className : ''}`}>
      <div className={styles.head}>
        <Table {...props.table} />
        <Spots className={styles.spots} spots={props.spots} />
      </div>
      <div className={styles.timeline}>
        <Timeline orders={props.orders} />
      </div>
    </div>
  )
}
