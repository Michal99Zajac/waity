import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import MenuImg from '../../assets/img/section/menu.jpg'
import InformationImg from '../../assets/img/section/information.jpg'
import ReservationsImg from '../../assets/img/section/reservations.jpg'
import TablesImg from '../../assets/img/section/tables.jpg'
import { FoodTile } from './food-tile'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('food-tile', () => {
  const srcOptions = {
    one: MenuImg,
    two: InformationImg,
    three: ReservationsImg,
    four: TablesImg,
    none: undefined
  }

  const className = text('className', '')
  const src: any = select('src', srcOptions, srcOptions.one)
  const alt = text('alt', 'alt text')
  const label = text('label', 'label')
  const desc = text('desc', 'desc')
  const onClick = action('onClick')
  const price = text('price', '12 $')
  const id = text('id', 'id')

  return (
    <FoodTile id={id} price={price} onClick={onClick} desc={desc} src={src} alt={alt} label={label} className={className} />
  )
})
