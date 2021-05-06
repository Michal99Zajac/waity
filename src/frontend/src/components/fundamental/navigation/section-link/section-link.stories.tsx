import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import MenuImg from '../../../../assets/img/section/menu.jpg'
import InformationImg from '../../../../assets/img/section/information.jpg'
import ReservationsImg from '../../../../assets/img/section/reservations.jpg'
import TablesImg from '../../../../assets/img/section/tables.jpg'
import { SectionLink } from './section-link'


const stories = storiesOf('navigation', module)
stories.addDecorator(withKnobs)
stories.add('section-link', () => {
  const srcOptions = {
    menu: MenuImg,
    information: InformationImg,
    reservations: ReservationsImg,
    tables: TablesImg
  }

  const className = text('className', '')
  const to = text('to', '#')
  const alt = text('alt', 'text')
  const src: any = select('src', srcOptions, srcOptions.menu)
  const section = text('section', 'information')

  return (
    <Router>
      <SectionLink section={section} src={src} alt={alt} className={className} to={to} />
    </Router>
  )
})
