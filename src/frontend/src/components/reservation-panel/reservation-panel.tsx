import React from 'react'
import DefaultImg from '../../assets/img/default/default_restaurant.jpg'
import { ReactComponent as PlaceSvg } from '../../assets/svg/basic/place.svg'
import { ReactComponent as TimeSvg } from '../../assets/svg/basic/time.svg'
import { ReactComponent as UserSvg } from '../../assets/svg/basic/user.svg'
import { Button } from '../fundamental/actions/button/button'
import { DateTeaser } from '../fundamental/structure/date-teaser/date-teaser'
import { Heading } from '../fundamental/titles-n-text/heading/heading'
import { Paragraph } from '../fundamental/titles-n-text/paragraph/paragraph'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import styles from './reservation-panel.module.sass'


type ReservationPanelTypes = {
  date: Date,
  timeStart: string,
  timeStop: string,
  id: string,
  restaurantName: string,
  address: string,
  reservationFor: string,
  numSeats: number,
  category: string,
  src?: string,
  alt?: string,
  className?: string
}

/**
 * ReservationPanel Component - rpanel for inform about near or past reservations
 * 
 * @param {object} props Object with props like
 * - date (Date) - date of reservation
 * - timeStart (string) - starting time of reservation
 * - timeStop (string) - stoping time of reservation
 * - id (string) - id of reservation
 * - restaurantName (string) - name of restaurant
 * - address (string) - restaurant address
 * - reservationFor (string) - name of the person on which the reservation is made
 * - numSeats (string) - number of reserved seats
 * - category (string) - category of restaurant
 * - src (string) - path to the immage of restaurant
 * - alt (string) - alt text if image wont display
 * - className (string) - additional class for component
 * @returns JSX ReservationPanel Component
 */
export function ReservationPanel(props: ReservationPanelTypes): JSX.Element {
  const id = props.id

  const onDelete = (): void => {
    // TODO: add delete option from server

    console.log(`delete reservation ${id}`)
  }

  return (
    <div className={`${styles.reservationPanel} ${props.className ? props.className : ''}`}>
      <div className={styles.imageSection}>
        {props.src ? <img src={props.src} alt={props.alt} /> : <img src={DefaultImg} alt='defalut restaurant image' />}
        <div className={styles.imageFront}>
          <Button color='white' size='m' desc='cancel' small onClick={onDelete} />
          <DateTeaser date={props.date} />
        </div>
      </div>
      <div className={styles.infoSection}>
        <Heading className={styles.heading} color='blue' size='m' label={props.restaurantName} />
        <Heading className={styles.subheading} color='black' size='s' label={props.category} />
        <Paragraph className={`${styles.pCenter} ${styles.space}`} color='grey'><PlaceSvg /> {props.address}</Paragraph>
        <Paragraph className={`${styles.pCenter} ${styles.space}`} color='grey'><TimeSvg /> {`${props.timeStart} - ${props.timeStop}`}</Paragraph>
        <Paragraph className={`${styles.pCenter} ${styles.space}`} color='grey'><UserSvg /> {props.reservationFor}</Paragraph>
        <div>
          <InfoLabel size='s' status='inform' label='seats' />
          <InfoLabel size='s' status='none' label={props.numSeats.toString()} />
        </div>
      </div>
    </div>
  )
}
