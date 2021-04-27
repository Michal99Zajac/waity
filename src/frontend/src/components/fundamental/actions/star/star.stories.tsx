import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Star } from './star'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('star', () => {
  const rate = number('rate', 3)
  const value = number('value', 2)
  const setRate = action('setRate')

  return (
    <Star setRate={setRate} value={value} rate={rate} />
  )
})
