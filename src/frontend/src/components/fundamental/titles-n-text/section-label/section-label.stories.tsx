import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { SectionLabel } from './section-label'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('section-label', () => {
  const label = text('label', 'very long label')
  const firm = boolean('firm', false)

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#ebebeb'
    }}>
      <SectionLabel firm={firm} label={label} />
    </div>
  )
})
