import React from 'react'
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { CategoryTab } from './category-tab'
import HungaryImg from '../../../../assets/img/categories/hungary.jpg'
import FranceImg from '../../../../assets/img/categories/france.jpg'
import JapanImg from '../../../../assets/img/categories/japan.jpg'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('category-tab', () => {
  const srcOptions = {
    hungary: HungaryImg,
    japan: JapanImg,
    france: FranceImg
  }

  const alt = text('alt', 'image')
  const baseurl = text('baseurl', '#')
  const category = text('category', 'hungary')
  const src = select('src', srcOptions, srcOptions['hungary'])


  return (
    <Router basename='/'>
      <CategoryTab 
        src={src}
        alt={alt}
        baseurl={baseurl}
        category={category}
      />
    </Router>
  )
})
