import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SmallButton } from './small-button'
import { ReactComponent as Cross } from '../../../../assets/svg/basic/cross.svg'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('small-button', () => {
  const colorOptions = {
    grey: 'grey',
    white: 'white',
    yellow: 'yellow',
    black: 'black',
    blue: 'blue',
    none: undefined
  }

  const onClick = action('small button action')
  const disabled = boolean('disabled', false)
  const color: any = select('color', colorOptions, 'white')
  const className = text('className', '')

  return (
    <SmallButton className={className} color={color} disabled={disabled} onClick={onClick} svg={<Cross />} />
  )
})
