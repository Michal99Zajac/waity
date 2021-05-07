import React from 'react'
import { Table, TableTypes } from '../table/table'
import { Spots, Spot } from '../spots/spots'
import { Timeline, TimelineOrderBlockTypes } from '../../feedback/timeline/timeline'
import styles from './reservation-panel.module.sass'

type ReservationPanelTypes = {
  className?: string,
  orders: TimelineOrderBlockTypes[],
  table: TableTypes,
  spots: Spot[]
}

/**
 * ReservationPanel Component - panel for visualization time of reservation during the day
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * - table (object) - see! Table Component
 * - spots (array) - see! Spots Component
 * - orders (array) - see! Timeline Component
 * @returns JSX ReservationPanel Component
 */
export function ReservationPanel(props: ReservationPanelTypes): JSX.Element {
  return (
    <div className={`${styles.reservationPanel} ${props.className ? props.className : ''}`}>
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
