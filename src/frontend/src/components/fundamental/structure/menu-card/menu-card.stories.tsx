import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import FoodTwoImg from '../../../../assets/img/food/food_two.jpg'
import { MenuCard } from './menu-card'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('menu-card', () => {
  const imgOptions = {
    image: FoodTwoImg,
    none: undefined
  }

  const className = text('className', '')
  const price = text('price', '12 $')
  const foodName = text('foodName', 'spaghetti')
  const msg = text('msg', '')
  const alt = text('alt', 'text for image')
  const img = select('img', imgOptions, imgOptions.none)

  return (
    <MenuCard img={img} alt={alt} msg={msg} price={price} foodName={foodName} className={className} />
  )
})
