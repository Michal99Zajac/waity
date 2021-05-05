import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { HourBar } from './hour-bar'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('hour-bar', () => {
  const className = text('className', '')

  return (
    <HourBar className={className} />
  )
})
