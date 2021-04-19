import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { CategoryContainer } from './category-container'
import { CategoryTab } from '../category-tab/category-tab'
import Image from '../../../../assets/img/categories/france.jpg'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('category-container', () => {
  return (
    <Router>
      <CategoryContainer>
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
        <CategoryTab baseurl='#' category='hungary' src={Image} alt='image' />
      </CategoryContainer>
    </Router>
  )
})
