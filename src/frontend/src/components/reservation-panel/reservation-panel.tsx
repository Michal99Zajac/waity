import React from 'react'
import DefaultImg from '../../assets/img/restaurants/restaurant_one.jpg'
import styles from './reservation-panel.module.sass'


type ReservationPanelTypes = {
  src?: string,
  alt?: string,
  className?: string
}

export function ReservationPanel(props: ReservationPanelTypes): JSX.Element {
  return (
    <div className={`${styles.reservationPanel} ${props.className ? props.className : ''}`}>
      <div className={styles.imageSection}>
        {props.src ? <img src={props.src} alt={props.alt} /> : <img src={DefaultImg} alt='defalut restaurant image' />}
        <div className={styles.imageFront}>
          ...
        </div>
      </div>
    </div>
  )
}
