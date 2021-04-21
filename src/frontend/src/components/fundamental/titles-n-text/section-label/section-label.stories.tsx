import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { SectionLabel } from './section-label'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('section-label', () => {
  const sizeOptions = {
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl'
  }

  const label = text('label', 'very long label')
  const firm = boolean('firm', false)
  const size: any = select('size', sizeOptions, sizeOptions['m'])
  const offer = boolean('offer', false)

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#ebebeb'
    }}>
      <SectionLabel offer={offer} size={size} firm={firm} label={label} />
    </div>
  )
})
