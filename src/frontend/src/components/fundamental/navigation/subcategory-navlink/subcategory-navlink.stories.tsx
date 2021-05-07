import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { SubcategoryNavlink } from './subcategory-navlink'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('subcategory-navlink', () => {
  const className = text('className', '')
  const activeClassName = text('activeClassName', '')
  const to = text('to', '#')
  const label = text('label', 'hello')

  return (
    <Router>
      <SubcategoryNavlink label={label} activeClassName={activeClassName} to={to} className={className} />
    </Router>
  )
})
