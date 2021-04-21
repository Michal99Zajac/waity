import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Heading } from './heading'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('heading', () => {
  const label = text('label', 'Heading')

  return (
    <Heading label={label} />
  )
})
