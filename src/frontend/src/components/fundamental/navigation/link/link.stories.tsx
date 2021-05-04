import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from './link'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('link', () => {
  const colorOptions = {
    grey: 'grey',
    blue: 'blue',
    yellow: 'yellow',
    black: 'black',
    none: undefined
  }

  const to = text('to', '#')
  const label = text('label', 'label')
  const color: any = select('color', colorOptions, colorOptions['none'])
  const className = text('className', '')

  return (
    <Router>
      <Link className={className} color={color} label={label} to={to} />
    </Router>
  )
})
