import React from 'react'
import { storiesOf } from '@storybook/react'
import { date as d, text, withKnobs } from '@storybook/addon-knobs'
import { DateTeaser } from './date-teaser'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('date-teaser', () => {
  const className = text('className', '')
  const date: any = d('date', new Date())

  return (
    <DateTeaser date={date} className={className} />
  )
})
