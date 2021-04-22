import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { StarRating } from './star-rating'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('star-rating', () => {
  const rating = number('rating', 3)
  const scale = number('scale', 5)
  const label = text('label', 'Rating')

  return (
    <StarRating label={label} rating={rating} scale={scale} />
  )
})
