import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Navlink } from './navlink'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('navlink', () => {
  const to = text('to', '#')
  const label = text('label', 'navlink')
  const alternative = boolean('alternative', false)
  const className = text('className', '')

  return (
    <Router>
      <Navlink className={className} alternative={alternative} label={label} to={to} />
    </Router>
  )
})
