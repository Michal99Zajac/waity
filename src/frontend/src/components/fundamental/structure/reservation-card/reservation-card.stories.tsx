import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ReservationCard } from './reservation-card'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('reservation-panel', () => {
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
  const tableObj = {
    width: 3,
    height: 2,
    id: 1
  }
  const spotsObj = [
    {
      quantity: 4,
      places: 1
    },
    {
      quantity: 2,
      places: 2
    }
  ]

  const className = text('className', '')
  const spots = object('spots', spotsObj)
  const orders: any = object('orders', orderObj)
  const table = object('table', tableObj)

  return (
    <ReservationCard table={table} orders={orders} spots={spots} className={className} />
  )
})
