import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ReservationTab } from './reservation-tab'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('reservation-tab', () => {
  return (
    <ReservationTab />
  )
})
