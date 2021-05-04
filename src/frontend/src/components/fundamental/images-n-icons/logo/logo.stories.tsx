import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { Logo } from './logo'


const stories = storiesOf('images-n-icons', module)
stories.addDecorator(withKnobs)
stories.add('logo', () => {
  const className = text('className', '')

  return (
    <Logo className={className} />
  )
})
