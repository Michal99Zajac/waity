import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'
import { Timeline } from './timeline'
import { action } from '@storybook/addon-actions'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('timeline/status', () => {
  const statusObj = [
    {
      timeStart: new Date('2021-06-01T12:00:00'),
      timeStop: new Date('2021-06-01T14:30:00'),
      status: 'available',
      id: '1'
    },
    {
      timeStart: new Date('2021-06-01T14:30:00'),
      timeStop: new Date('2021-06-01T16:00:00'),
      status: 'booked',
      id: '2'
    },
    {
      timeStart: new Date('2021-06-01T16:00:00'),
      timeStop: new Date('2021-06-03T02:30:00'),
      status: 'clean',
      id: '3'
    }
  ]

  const statuses: any = object('orders', statusObj)
  const className = text('className', '')

  return (
    <Timeline className={className} statuses={statuses} />
  )
})
