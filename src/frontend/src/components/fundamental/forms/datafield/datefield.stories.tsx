import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, array, text } from '@storybook/addon-knobs'
import { Datefield } from './datefield'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('datafield', () => {
  const valid = boolean('valid', false)
  const warning = array('warning', ['Error: Bad Email'], ':')
  const disabled = boolean('disabled', false)
  const label = text('label', '* date')
  const firm = boolean('firm', false)
  const minDate = new Date()
  const className = text('className', '')
  
  const [date, setDate] = useState(new Date())

  return (
    <Datefield
      className={className}
      minDate={minDate}
      firm={firm}
      label={label}
      disabled={disabled}
      valid={valid}
      warning={warning}
      value={date}
      onChange={setDate}
    />
  )
})
