import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Caption } from './caption'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('caption', () => {
  const content = text('content', 'small text')

  return (
    <Caption content={content} />
  )
})
