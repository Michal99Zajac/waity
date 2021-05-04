import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Textfield } from './textfield'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('textfield', () => {
  const label = text('label', '* password')
  const value = text('value', '')
  const placeholder = text('placeholder', 'placeholder')
  const onChange = action('on change')
  const warning = array('warning', ['Error: Bad Email'], ':')
  const valid = boolean('valid', false)
  const firm = boolean('firm', false)
  const disabled = boolean('disabled', false)
  const className = text('className', '')

  return (
    <Textfield
      className={className}
      disabled={disabled}
      firm={firm}
      value={value}
      valid={valid}
      placeholder={placeholder}
      onChange={onChange}
      warning={warning}
      label={label}
    />
  )
})
