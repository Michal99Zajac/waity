import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, object, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { TablePanel } from './table-panel'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('table-panel', () => {
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
  const facilitiesArray = [
    'window',
    'wc'
  ]

  const className = text('className', '')
  const spots = object('spots', spotsObj)
  const table = object('table', tableObj)
  const id = text('id', 'uuid')
  const onClick = action('onClick')
  const facilities = array('facilities', facilitiesArray, ':')

  return (
    <TablePanel facilities={facilities} id={id} onClick={onClick} spots={spots} table={table} className={className} />
  )
})
