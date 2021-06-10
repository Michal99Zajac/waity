import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { useAuth } from '../../hooks/use-auth'
import { Navbar } from './navbar'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('navbar', () => {
  const className = text('className', '')
  const firm = boolean('firm', false)
  const client = boolean('client', false)

  return (
    <Router>
      <Navbar firm={firm} client={client} className={className} />
    </Router>
  )
})

