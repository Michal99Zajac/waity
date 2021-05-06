import React, { useState } from 'react'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import styles from './hour-bar.module.sass'


type HourBarTypes = {
  className?: string
}

/**
 * HourBar Component - bar with info about opening hours
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * @returns JSX HourBar Component
 */
export function HourBar(props: HourBarTypes): JSX.Element {
  const [week, setWeek] = useState({
    Monday: {
      timeStart: '12:00',
      timeStop: '16:00'
    },
    Tuesday: {
      timeStart: '14:00',
      timeStop: '18:00'
    },
    Wednesday: {
      timeStart: '14:00',
      timeStop: '18:00'
    },
    Thursday: {
      timeStart: '14:00',
      timeStop: '18:00'
    },
    Friday: {
      timeStart: '14:00',
      timeStop: '22:00'
    },
    Saturday: {
      timeStart: '14:00',
      timeStop: '18:00'
    },
    Sunday: {
      timeStart: '14:00',
      timeStop: '18:00'
    }
  })

  // TODO: add fetching open hours data from server

  const createHourBar = (): JSX.Element[] => {
    let bars: JSX.Element[] = []

    for (const [day, hours] of Object.entries(week)) {
      for (const [hour, hourTime] of Object.entries(hours)) {
        bars.push(<InfoLabel key={`${day}${hour}`} className={`${styles[`${day}${hour}`]} ${styles.center}`} status='none' label={`${hourTime}`} />)
      }
    }

    return bars
  }

  return (
    <div className={`${styles.hourBar} ${props.className ? props.className : ''}`}>
      <InfoLabel className={`${styles.Monday} ${styles.center}`} status='inform' label='Monday' />
      <InfoLabel className={`${styles.Tuesday} ${styles.center}`} status='inform' label='Tuesday' />
      <InfoLabel className={`${styles.Wednesday} ${styles.center}`} status='inform' label='Wednesday' />
      <InfoLabel className={`${styles.Thursday} ${styles.center}`} status='inform' label='Thursday' />
      <InfoLabel className={`${styles.Friday} ${styles.center}`} status='inform' label='Friday' />
      <InfoLabel className={`${styles.Saturday} ${styles.center}`} status='inform' label='Saturday' />
      <InfoLabel className={`${styles.Sunday} ${styles.center}`} status='inform' label='Sunday' />
      <InfoLabel className={`${styles.start} ${styles.center}`} status='available' label='open' />
      <InfoLabel className={`${styles.stop} ${styles.center}`} status='booked' label='close' />
      { createHourBar().map(hour => hour) }
    </div>
  )
}
