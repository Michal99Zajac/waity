import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { Logo } from './logo'


const stories = storiesOf('images-n-icons', module)
stories.addDecorator(withKnobs)
stories.add('logo', () => {
  const logoOptions = {
    default: 'default',
    client: 'client',
    firm: 'firm',
    none: undefined
  }

  const className = text('className', '')
  const type: any = select('type', logoOptions, logoOptions.none)

  return (
    <Logo type={type} className={className} />
  )
})
