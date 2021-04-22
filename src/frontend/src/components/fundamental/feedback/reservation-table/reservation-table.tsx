import React from 'react'
import styles from './reservation-table.module.sass'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import { InfoLabel } from '../../titles-n-text/info-label/info-label'


type ScheduleTypes = {
  timeStart: Date,
  timeEnd: Date,
  status: string
}

type ReservationTableTypes = {
  id: number,
  spots: number,
  schedules: ScheduleTypes[]
}

/**
 * ReservationTable Component - Timeline of reservation for visualization
 * 
 * @param {object} props Object with props like
 * - id (number) - id of table
 * - spots (number) - number of spots at the table
 * - schedules (array[ScheduleTypes]) - schedue of reservations of table
 * @returns JSX ReservationTable Component
 */
export function ReservationTable(props: ReservationTableTypes): JSX.Element {
  // total possible booking time
  const total = props.schedules[props.schedules.length - 1].timeEnd.getTime() / 1000 - props.schedules[0].timeStart.getTime() / 1000
  
  /**
   * calc height range for part of reservation block 
   * 
   * @param start time of start reservation block
   * @param end time of end reservation block
   * @returns value of height for part of block
   */
  const calcRange = (start: Date, end: Date) => {
    const diff = end.getTime() / 1000 -  start.getTime() / 1000
    
    return Math.floor(300 * (diff / total))
  }

  return (
    <div className={styles.reservation}>
      <span className={styles.spanContainer}>
        <Paragraph size='xl' color='black'>Table</Paragraph>
        <span className={styles.spanId}>{props.id}</span>
      </span>
      <span className={styles.spanContainer}>
        <InfoLabel label='spots'></InfoLabel>
        <span className={styles.spanSpot}>{props.spots}</span>
      </span>
      <div className={styles.table}>
        { props.schedules.map(schedule => (
            <div
              style={{height: `${calcRange(schedule.timeStart, schedule.timeEnd)}px`}}
              className={`${styles.row} ${styles[schedule.status]}`}
              key={schedule.timeStart.getTime()}
            >
              <span className={styles.dotStart}></span>
              <span className={styles.start}>
                {schedule.timeStart.getHours() + ':' + schedule.timeStart.getMinutes() + 
                  (schedule.timeStart.getMinutes() < 10 ? '0' : '')}
              </span>
              <div className={styles.rowBlock}>{schedule.status}</div>
              <span className={styles.end}>
                {schedule.timeEnd.getHours() + ':' + schedule.timeEnd.getMinutes() + (schedule.timeEnd.getMinutes() < 10 ? '0' : '')}
              </span>
              <span className={styles.dotEnd}></span>
            </div>
          )
        )}
      </div>
    </div>
  )
}
