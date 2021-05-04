import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { array, number, object, select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ReservationTab } from './reservation-tab'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('reservation-tab', () => {
  const statusOptions = {
    available: 'available',
    booked: 'booked',
    partial: 'partial'
  }
  const spotsArray = [
    {
      quantity: 3,
      places: 1
    },
    {
      quantity: 2,
      places: 2
    }
  ]

  const setState = action('setState action')
  const state = text('state', '')
  const facilities = array('facilities', ['window'], ':')
  const status: any = select('status', statusOptions, statusOptions.partial)
  const id = text('id', '12')
  const tableId = number('tableId', 1)
  const value = text('value', 'uuid')
  const spots = object('spots', spotsArray)
  const table = object('table', {width: 3, height: 2})
  const className = text('className', '')

  return (
    <ReservationTab
      table={table}
      spots={spots}
      facilities={facilities}
      status={status}
      id={id}
      tableId={tableId}
      state={state}
      setState={setState}
      value={value}
      className={className}
    />
  )
})
