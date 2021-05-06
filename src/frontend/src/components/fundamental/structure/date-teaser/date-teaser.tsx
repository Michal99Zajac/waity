import React from 'react'
import moment from 'moment'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import styles from './date-teaser.module.sass'


type DateTeaserTypes = {
  className?: string,
  date: Date
}

/**
 * DateTeaser Component - short feedback about choosen date
 * 
 * @param {object} props Object with props like
 * - date (Date) - date to display
 * - className (string) - additional class for component
 * @returns JSX DateTeaser Component
 */
export function DateTeaser(props: DateTeaserTypes): JSX.Element {
  const date = moment(props.date)

  const getDates = (): JSX.Element[] => {
    const dates: JSX.Element[] = []
    date.subtract(3, 'day')

    for (let i = 0; i < 7; i++) {
      dates.push(
        <Paragraph
          size='s'
          className={`${styles.day} ${i < 3 ? styles.left : ''} ${i > 3 ? styles.right : ''}`}
          color='black'
        >
          {date.format('dd')}
        </Paragraph>,
        <Paragraph
          size='s'
          className={`${styles.dayNumber} ${i == 3 ? styles.current : ''} ${i < 3 ? styles.left : ''} ${i > 3 ? styles.right : ''}`}
          color='white'
        >
          {date.format('D')}
        </Paragraph>
      )

      date.add(1, 'day')
    }

    date.subtract(4, 'day')

    return dates
  }

  return (
    <div className={`${styles.dateTeaser} ${props.className ? props.className : ''}`}>
      <Paragraph className={styles.month} size='xll' color='black'>{date.format('MMMM')}</Paragraph>
      { getDates().map(date => date) }
    </div>
  )
}
