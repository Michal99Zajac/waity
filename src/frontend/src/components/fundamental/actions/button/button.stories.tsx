import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Button } from './button'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('button', () => {
  const typeOptions = {
    button: 'button',
    submit: 'submit',
    none: undefined
  }

  const colorOptions = {
    black: 'black',
    blue: 'blue',
    yellow: 'yellow',
    none: undefined
  }

  const desc = text('desc', 'click me!')
  const type: any = select('type', typeOptions, 'none')
  const color: any = select('color', colorOptions, 'none')
  const onClick = action('onClick Button')
  const small = boolean('small', false)
  const disabled = boolean('disabled', false)

  return (
    <Button disabled={disabled} color={color} small={small} type={type} onClick={onClick} desc={desc} />
  )
})
