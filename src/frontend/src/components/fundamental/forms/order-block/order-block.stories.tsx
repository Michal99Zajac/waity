import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { OrderBlock } from './order-block'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('order-block', () => {
  const labelOptions = {
    available: 'available',
    clean: 'clean',
    any: 'any'
  }
  const typeOptions = {
    available: 'available',
    clean: 'clean',
    booked: 'booked',
    timeout: 'timeout'
  }

  const label = select('label', labelOptions, labelOptions.any)
  const className = text('className', '')
  const id = text('id', '1234-1345-a983')
  const name = text('name', 'name')
  const setId = action('setId')
  const type: any = select('type', typeOptions, typeOptions.available)

  return (
    <OrderBlock
      label={label}
      className={className}
      id={id}
      name={name}
      setId={setId}
      type={type}
    />
  )
})
