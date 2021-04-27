import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text, withKnobs } from '@storybook/addon-knobs'
import { StarPicker } from './star-picker'


const stories = storiesOf('state-components', module)
stories.addDecorator(withKnobs)
stories.add('star-picker', () => {
  const range = number('range', 5)
  const rate = number('rate', 0)
  const label = text('label', 'review')
  const floatRate = number('floatRate', 4.74)

  return (
    <div style={{
      backgroundColor: '#f0efef'
    }}>
      <StarPicker label={label} floatRate={floatRate} range={range} rate={rate} />
    </div>
  )
})
