import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { AddPanel } from './add-panel'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('add-panel', () => {
  const onClick = action('on Click')
  const className = text('className', '')

  return (
    <AddPanel onClick={onClick} className={className} />
  )
})
