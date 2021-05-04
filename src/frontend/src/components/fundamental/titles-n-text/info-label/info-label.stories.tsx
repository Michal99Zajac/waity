import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { InfoLabel } from './info-label'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('info-label', () => {
  const statusOptions = {
    none: 'none',
    available: 'available',
    partial: 'partial',
    booked: 'booked',
    inform: 'inform',
    null: undefined
  }
  const sizeOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    xll: 'xll',
    none: undefined
  }

  const label = text('label', 'London')
  const status: any = select('status', statusOptions, statusOptions.none)
  const size: any = select('size', sizeOptions, sizeOptions.none)
  const className = text('className', '')

  return (
    <InfoLabel className={className} size={size} status={status} label={label} />
  )
})
