import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text, withKnobs } from '@storybook/addon-knobs'
import { Spots } from './spots'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('spots', () => {
  const spotsObj = [
    {
      quantity: 4,
      places: 1
    },
    {
      quantity: 2,
      places: 2
    }
  ]

  const className = text('className', 'selected')
  const spots = object('spots', spotsObj)

  return (
    <Spots spots={spots} className={className} />
  )
})
