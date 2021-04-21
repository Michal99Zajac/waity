import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { OfferCard } from './offer-card'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('offer-card', () => {
  return (
    <OfferCard />
  )
})
