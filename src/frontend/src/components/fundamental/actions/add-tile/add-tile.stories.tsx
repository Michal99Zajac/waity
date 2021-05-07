import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { AddTile } from './add-tile'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('add-tile', () => {
  const className = text('className', '')
  const onClick = action('onClick')

  return (
    <AddTile onClick={onClick} className={className} />
  )
})
