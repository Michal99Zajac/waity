import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import { UserList } from './user-list'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('user-list', () => {
  const username = text('username', 'email@email.com')
  const onLogout = action('logout action')
  const className = text('className', '')

  const links = [
    <NavLink to='#'>main</NavLink>,
    <NavLink to='#'>profile</NavLink>,
    <NavLink to='#'>booked</NavLink>,
    <NavLink to='#'>restaurants</NavLink>
  ]

  return (
    <Router>
      <UserList className={className} links={links} onLogout={onLogout} username={username} />
    </Router>
  )
})
