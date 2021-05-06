import React from 'react'
import { storiesOf } from '@storybook/react'
import { date as d, number, text, withKnobs } from '@storybook/addon-knobs'
import { ReservationPanel } from './reservation-panel'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('reservation-panel', () => {
  const src = text('src', '')
  const alt = text('alt', '')
  const className = text('className', '')
  const date: any = d('date', new Date())
  const id = text('id', 'uuid')
  const restaurantName = text('restaurantName', 'Restaurant Name')
  const address = text('address', 'address')
  const timeStart = text('timeStart', '12:00')
  const timeStop = text('timeStop', '18:00')
  const reservationFor = text('reservationFor', 'Jhon Snow')
  const numSeats = number('numSeats', 6)
  const category = text('category', 'category')

  return (
    <ReservationPanel
      reservationFor={reservationFor}
      timeStart={timeStart}
      timeStop={timeStop}
      address={address}
      restaurantName={restaurantName}
      id={id}
      date={date}
      className={className}
      alt={alt}
      src={src}
      numSeats={numSeats}
      category={category}
    />
  )
})
