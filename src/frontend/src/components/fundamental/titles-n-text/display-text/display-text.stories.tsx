import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text as txt } from '@storybook/addon-knobs'
import { DisplayText } from './display-text'


const stories = storiesOf('titles-n-text', module)
stories.addDecorator(withKnobs)
stories.add('display-text', () => {
  const text = txt('text', 'Go! Sign in!')

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: '#6153cc'
    }}>
      <DisplayText text={text} />
    </div>
  )
})
