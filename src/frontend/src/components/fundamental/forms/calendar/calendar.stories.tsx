import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Calendar } from './calendar'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('calendar', () => {
  const [date, setDate] = useState(new Date())
  const minDate = new Date()
  const className = text('className', '')

  return (
    <Calendar className={className} value={date} onChange={setDate} minDate={minDate} />
  )
})
