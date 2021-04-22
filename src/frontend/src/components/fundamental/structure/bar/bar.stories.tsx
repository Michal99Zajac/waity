import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, withKnobs } from '@storybook/addon-knobs'
import { Bar } from './bar'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('bar', () => {
  const colorOptions = {
    yellow: 'yellow',
    blue: 'blue',
    white: 'white',
    black: 'black',
    grey: 'grey',
    none: undefined
  }
  const marginOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    none: undefined
  }

  const color: any = select('color', colorOptions, colorOptions.none)
  const margin: any = select('margin', marginOptions, marginOptions.none)

  return (
    <Bar margin={margin} color={color} />
  )
})
