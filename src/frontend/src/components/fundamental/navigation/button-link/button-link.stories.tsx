import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { ButtonLink } from './button-link'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('button-link', () => {
  const colorOptions = {
    white: 'white',
    black: 'black',
    blue: 'blue',
    yellow: 'yellow',
    grey: 'grey',
    none: undefined
  }

  const color: any = select('color', colorOptions, colorOptions.none)
  const to = text('to', '#')
  const content = text('content', 'link')
  const className = text('className', '')

  return (
    <Router>
      <ButtonLink className={className} content={content} to={to} color={color} />
    </Router>
  )
})
