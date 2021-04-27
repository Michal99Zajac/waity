import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { StarPicker } from './star-picker'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('star-picker', () => {
  return (
    <StarPicker />
  )
})
