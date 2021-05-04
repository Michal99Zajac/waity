import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { QuestionMark } from './question-mark'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('question-mark', () => {
  const sizeOptions = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    none: undefined
  }

  const msg = text('msg', 'In this article Adrian Tennant focuses on short texts such as messages, notes, instructions and notices.')
  const size: any = select('size', sizeOptions, sizeOptions.medium)
  const className = text('className', '')

  return (
    <div style={{
      width: '250px',
      height: '300px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    }}>
      <QuestionMark className={className} size={size} msg={msg} />
    </div>
  )
})
