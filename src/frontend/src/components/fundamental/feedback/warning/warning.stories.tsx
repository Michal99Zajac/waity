import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, withKnobs } from '@storybook/addon-knobs'
import { Warning } from './warning'


const stories = storiesOf('feedback', module)
stories.addDecorator(withKnobs)
stories.add('warning', () => {
  const msg = array('msg', ['Error: Bad Password'])

  return (
    <div style={{
      position: 'relative',
      top: '200px',
      width: '100vw',
      height: '100vh'
    }}>
      <Warning msg={msg} />
    </div>
  )
})
