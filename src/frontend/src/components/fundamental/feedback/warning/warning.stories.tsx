import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Warning } from './warning'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('warning', () => {
  return (
    <Warning msg='hello' />
  )
})
