import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, object, text, withKnobs } from '@storybook/addon-knobs'
import { ReservationTable } from './reservation-table'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('reservation-table', () => {
  const schedulesObj = [
    {
      timeStart: new Date('2021-06-01T12:00:00'),
      timeEnd: new Date('2021-06-01T14:30:00'),
      status: 'booked'
    },
    {
      timeStart: new Date('2021-06-01T14:30:00'),
      timeEnd: new Date('2021-06-01T16:00:00'),
      status: 'clean'
    },
    {
      timeStart: new Date('2021-06-01T16:00:00'),
      timeEnd: new Date('2021-06-01T22:30:00'),
      status: 'available'
    }
  ]

  const id = number('id', 1)
  const spots = number('spots', 8)
  const schedules = object('schedules', schedulesObj)
  const className = text('className', '')

  return (
    <ReservationTable className={className} schedules={schedules} id={id} spots={spots} />
  )
})
