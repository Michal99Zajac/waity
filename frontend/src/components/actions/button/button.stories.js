import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select, boolean } from '@storybook/addon-knobs'
import { Button } from './button'

export const stories = storiesOf("actions", module)
stories.addDecorator(withKnobs)
stories.add('button', () => {
  const options = {
    range: true,
    min: 120,
    max: 300,
    step: 5
  }

  const selects = {
    Primary: 'primary',
    Secondary: 'second'
  }

  return (
  <div style={{width: `${number('div size', 150, options)}px`}}>
    <Button 
    className={select('styles', selects, 'primary')} 
    onClick={action('button-click')}
    disabled={boolean('disabled', false)}
    >
      {text("msg", "click me!")}
    </Button>
  </div>
  )
})