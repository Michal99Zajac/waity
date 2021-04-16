import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { StaticSvg } from './static-svg'
import SvgImage from '../../../../assets/svg/sign-in.svg'


const stories = storiesOf('images-n-icons', module)
stories.addDecorator(withKnobs)
stories.add('static-svg', () => {
  const alt = text('alt', 'svg')

  return (
    <StaticSvg src={SvgImage} alt={alt}></StaticSvg>
  )
})
