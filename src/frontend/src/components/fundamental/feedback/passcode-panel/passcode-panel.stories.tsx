import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { PasscodePanel } from './passcode-panel'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('passcode-panel', () => {
  const className = text('className', '')
  const passcode = text('passcode', '1234567')

  return (
    <PasscodePanel passcode={passcode} className={className} />
  )
})
