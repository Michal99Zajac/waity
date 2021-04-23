import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { Table } from './table'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('table', () => {
  const selected = boolean('selected', false)
  const width = number('width', 3)
  const height = number('height', 2)
  const id = number('id', 1)

  return (
    <Table selected={selected} width={width} height={height} id={id} />
  )
})
