import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import {} from '@storybook/addon-actions'
import { ReservationSummary } from './reservation-summary'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('reservation-summary', () => {
  const className = text('className', '')
  const id = text('id', 'uuid')

  return (
    <ReservationSummary id={id} className={className} />
  )
})
