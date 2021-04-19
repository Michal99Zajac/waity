import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Passwordfield } from './passwordfield'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('passwordfield', () => {
  const value = text('value', '')
  const placeholder = text('placeholder', 'password')
  const onChange = action('on change')
  const warning = array('warning', ['Error: Bad Email'], ':')
  const valid = boolean('valid', false)
  const disabled = boolean('disabled', false)
  const to = text('to', '#')

  return (
    <Router>
      <Passwordfield to={to} value={value} placeholder={placeholder} onChange={onChange} warning={warning} valid={valid} disabled={disabled} />
    </Router>
  )
})
