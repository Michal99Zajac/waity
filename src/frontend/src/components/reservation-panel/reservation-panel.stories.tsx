import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ReservationPanel } from './reservation-panel'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('reservation-panel', () => {
  return (
    <ReservationPanel />
  )
})
