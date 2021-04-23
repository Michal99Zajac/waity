import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Heading } from './heading'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('heading', () => {
  const sizeOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    xll: 'xll',
    none: undefined
  }
  const colorOptions = {
    white: 'white',
    black: 'black',
    grey: 'grey',
    yellow: 'yellow',
    blue: 'blue',
    none: undefined
  }

  const label = text('label', 'Heading')
  const size: any = select('size', sizeOptions, sizeOptions.none)
  const special = boolean('special', false)
  const color: any = select('color', colorOptions, colorOptions.none)

  return (
    <Heading color={color} special={special} size={size} label={label} />
  )
})
