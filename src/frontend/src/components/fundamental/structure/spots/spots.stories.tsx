import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'
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

  const selected = boolean('selected', false)
  const spots = object('spots', spotsObj)

  return (
    <Spots spots={spots} selected={selected} />
  )
})
