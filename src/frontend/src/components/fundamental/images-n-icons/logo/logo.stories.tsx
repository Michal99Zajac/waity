import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Logo } from './logo'


const stories = storiesOf('images-n-icons', module)
stories.addDecorator(withKnobs)
stories.add('logo', () => {
  return (
    <Logo />
  )
})
