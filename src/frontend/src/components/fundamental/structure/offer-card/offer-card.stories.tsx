import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, number } from '@storybook/addon-knobs'
import { OfferCard } from './offer-card'
import RestaurantOne from '../../../../assets/img/restaurants/restaurant_one.jpg'
import RestaurantTwo from '../../../../assets/img/restaurants/restaurant_two.jpg'


const stories = storiesOf('structure', module)
stories.addDecorator(withKnobs)
stories.add('offer-card', () => {
  const srcOptions = {
    imageOne: RestaurantOne,
    imageTwo: RestaurantTwo
  }

  const to = text('to', '#')
  const alt = text('alt', 'image')
  const label = text('label', 'restaurant')
  const src = select('src', srcOptions, srcOptions.imageOne)
  const caption = text('caption', 'caption')
  const location = text('location', 'location')
  const price = text('price', 'price')
  const rating = number('rating', 3)

  return (
    <Router>
      <OfferCard rating={rating} caption={caption} location={location} price={price} src={src} to={to} alt={alt} label={label} />
    </Router>
  )
})
