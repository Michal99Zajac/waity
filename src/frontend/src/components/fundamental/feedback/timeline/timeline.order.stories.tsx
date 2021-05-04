import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'
import { Timeline } from './timeline'
import { action } from '@storybook/addon-actions'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('timeline/order', () => {
  const orderObj = [
    {
      timeStart: new Date('2021-06-01T12:00:00'),
      timeStop: new Date('2021-06-01T14:30:00'),
      name: 'order',
      setId: action('setId'),
      type: 'booked',
      label: 'Jhon Snow',
      id: '1'
    },
    {
      timeStart: new Date('2021-06-01T14:30:00'),
      timeStop: new Date('2021-06-01T16:00:00'),
      name: 'order',
      setId: action('setId'),
      type: 'timeout',
      label: 'Jhon Wons',
      id: '2'
    },
    {
      timeStart: new Date('2021-06-01T16:00:00'),
      timeStop: new Date('2021-06-03T02:30:00'),
      name: 'order',
      setId: action('setId'),
      type: 'available',
      label: 'available',
      id: '3'
    }
  ]

  const orders: any = object('orders', orderObj)
  const className = text('className', '')

  return (
    <Timeline className={className} orders={orders} />
  )
})
