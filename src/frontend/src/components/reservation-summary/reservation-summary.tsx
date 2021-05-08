import React, { useState, useEffect } from 'react'
import { ReactComponent as EnvelopSvg } from '../../assets/svg/basic/envelop.svg'
import { ReactComponent as PhoneSvg } from '../../assets/svg/basic/phone.svg'
import { ReactComponent as ReservationNameSvg } from '../../assets/svg/basic/reservation-name.svg'
import { ReactComponent as UserSvg } from '../../assets/svg/basic/user.svg'
import { ReactComponent as TimeSvg } from '../../assets/svg/basic/time.svg'
import { ReactComponent as FeedbackSvg } from '../../assets/svg/basic/feedback.svg'
import { Paragraph } from '../fundamental/titles-n-text/paragraph/paragraph'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import { Button } from '../fundamental/actions/button/button'
import styles from './reservation-summary.module.sass'


type ReservationType = {
  name: string,
  surname: string,
  nickname: string,
  reservStart: string,
  reservStop: string,
  phone: string,
  email: string,
  feedback: string,
  type: 'reservation'
}

type CleanType = {
  reservStart: string,
  reservStop: string,
  type: 'clean'
}

type AvailableType = {
  reservStart: string,
  reservStop: string,
  type: 'available'
}

type ReservationSummaryTypes = {
  id: string,
  className?: string
}

/**
 * ReservationSummary Component - component for visualization type of reservation on timeline
 * 
 * @param {object} props Object with props like
 * - id (string) - id of reservation to display
 * - className (string) - additional class for component
 * @returns JSX ReservationSummary Component
 */
export function ReservationSummary(props: ReservationSummaryTypes): JSX.Element | null {
  const [data, setData] = useState<CleanType | CleanType | AvailableType | any>({})

  function fetchData() {
    // TODO: get data from server

    // !important get type of information 'clean' | 'available' | 'reservation'

    let random = Math.floor(Math.random() * 3) // temporary for simulation data displaying

    if (random == 0)
      setData({
        name: 'name',
        surname: 'surname',
        nickname: 'nickname',
        reservStart: '12:00',
        reservStop: '16:00',
        phone: '+48 723 093 934',
        email: 'email@email.com',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        type: 'reservation'
      })

    if (random == 1)
      setData({
        reservStart: '12:00',
        reservStop: '16:00',
        type: 'clean'
      })

    if (random == 2)
      setData({
        reservStart: '12:00',
        reservStop: '16:00',
        type: 'available'
      })
  }

  const onRemove = () => {
    alert('on remove')
  }

  const onCheck = () => {
    alert('on Check')
  }

  const getReservation = (reservation: ReservationType): JSX.Element => (
    <>
      <InfoLabel className={styles.label} size='l' status='inform' label='Reservation'/>
      <div className={styles.section}>
        <UserSvg />
        <Paragraph size='s' className={`${styles.p}`}>
          {`${reservation.name} ${reservation.surname}`}
        </Paragraph>
      </div>
      <div className={styles.section}>
        <ReservationNameSvg />
        <Paragraph size='s' className={`${styles.p}`} bold>
          {reservation.nickname}
        </Paragraph>
      </div>
      <div className={styles.section}>
        <TimeSvg />
        <Paragraph size='s' className={`${styles.p}`} bold>
          {reservation.reservStart}-{reservation.reservStop}
        </Paragraph>
      </div>
      <div className={styles.section}>
        <PhoneSvg />
        <Paragraph size='s' className={`${styles.p}`}>
          {reservation.phone}
        </Paragraph>
      </div>
      <div className={styles.section}>
        <EnvelopSvg />
        <Paragraph size='s' className={`${styles.p}`}>
          {reservation.email}
        </Paragraph>
      </div>
        {reservation.feedback && (
          <div className={`${styles.section} ${styles.sectionFeed}`}>
            <FeedbackSvg />
            <Paragraph size='s' className={`${styles.feedback}`}>{reservation.feedback}</Paragraph>
          </div>
        )}
      <div className={styles.buttons}>
        <Button className={styles.delete} size='m' onClick={onRemove} small color='white' type='button' desc='remove' />
        <Button className={styles.check} size='m' onClick={onCheck} small color='blue' type='button' desc='check' />
      </div>
    </>
  )

  const getClean = (clean: CleanType): JSX.Element => (
    <>
      <InfoLabel className={styles.label} size='l' status='inform' label='Clean'/>
      <div className={styles.section}>
        <TimeSvg />
        <Paragraph size='s' className={`${styles.p}`} bold>
          {clean.reservStart}-{clean.reservStop}
        </Paragraph>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.delete} size='m' onClick={onRemove} small color='white' type='button' desc='remove' />
        <Button className={styles.check} size='m' onClick={onCheck} small color='blue' type='button' desc='check' />
      </div>
    </>
  )

  const getAvailable = (available: AvailableType): JSX.Element => (
    <>
      <InfoLabel className={styles.label} size='l' status='available' label='Available'/>
      <div className={styles.section}>
        <TimeSvg />
        <Paragraph size='s' className={`${styles.p}`} bold>
          {available.reservStart}-{available.reservStop}
        </Paragraph>
      </div>
    </>
  )

  useEffect(() => {
    fetchData()
  }, [props.id])

  return (
    data.type ? 
    <div className={`${styles.reservationSummary} ${props.className ? props.className : ''}`}>
      { data.type == 'reservation' && getReservation(data) }
      { data.type == 'clean' && getClean(data) }
      { data.type == 'available' && getAvailable(data) }
    </div> :
    null
  )
}
