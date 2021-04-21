import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { InfoLabel } from './info-label'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('info-label', () => {
  const label = text('label', 'London')

  return (
    <InfoLabel label={label} />
  )
})
