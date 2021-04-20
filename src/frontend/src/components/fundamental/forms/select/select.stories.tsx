import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, array, object, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Select } from './select'


const stories = storiesOf('forms', module)
stories.addDecorator(withKnobs)
stories.add('select', () => {
  const state = text('state', '')
  const setState = action('set state action')
  const label = text('label', 'label')
  const category = text('category', 'items')
  const placeholder = text('placeholder', 'placeholder')
  const firm = boolean('firm', false)

  const options = [
    {
      value: 'item 1',
      id: '1'
    },
    {
      value: 'item 2',
      id: '2'
    }
  ]

  return (
    <Select
      firm={firm}
      label={label}
      options={options}
      category={category}
      placeholder={placeholder}
      state={state}
      setState={setState}
    />
  )
})
