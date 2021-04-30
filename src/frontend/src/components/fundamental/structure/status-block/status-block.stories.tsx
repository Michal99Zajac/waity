import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { StatusBlock } from './status-block'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('status-block', () => {
  const statusOptions = {
    clean: 'clean',
    available: 'available',
    booked: 'booked'
  }

  const status: any = select('status', statusOptions, statusOptions.available)
  const className = text('className', 'className')

  return (
    <StatusBlock status={status} className={className} />
  )
})
