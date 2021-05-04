import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { Caption } from './caption'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('caption', () => {
  const sizeOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    none: undefined
  }

  const content = text('content', 'small text')
  const size: any = select('size', sizeOptions, sizeOptions.none)
  const className = text('className', '')

  return (
    <Caption size={size} className={className} content={content} />
  )
})
