import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SvgButton } from './svg-button'
import { ReactComponent as CrossSvg } from '../../../../assets/svg/basic/cross.svg'


const stories = storiesOf('actions', module)
stories.addDecorator(withKnobs)
stories.add('svg-button', () => {
  const colorOptions = {
    white: 'white',
    yellow: 'yellow',
    blue: 'blue',
    none: undefined
  }

  const onClick = action('svg-button onClick')
  const disabled = boolean('disabled', false)
  const color: any = select('color', colorOptions, colorOptions.none)

  return (
    <SvgButton color={color} disabled={disabled} onClick={onClick} svg={<CrossSvg />} />
  )
})
