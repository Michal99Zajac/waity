import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Paragraph } from './paragraph'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('paragraph', () => {
  const sizeOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    xxl: 'xll',
    none: undefined
  }
  const colorOptions = {
    black: 'black',
    grey: 'grey',
    white: 'white',
    none: undefined
  }

  const children = text('children', 'Hello from paragraph')
  const size: any = select('size', sizeOptions, sizeOptions['none'])
  const color: any = select('color', colorOptions, colorOptions['none'])
  const bold = boolean('bold', false)

  return (
    <Paragraph bold={bold} color={color} size={size}>{children}</Paragraph>
  )
})
