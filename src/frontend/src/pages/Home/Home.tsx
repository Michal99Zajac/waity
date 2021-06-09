import React, { useState } from 'react'
import { Logo } from '../../components/fundamental/images-n-icons/logo/logo'
import { Link } from '../../components/fundamental/navigation/link/link'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'
import { Button } from '../../components/fundamental/actions/button/button'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { ReactComponent as ArrowSvg } from '../../assets/svg/basic/arrow-right.svg'
import { Paragraph } from '../../components/fundamental/titles-n-text/paragraph/paragraph'

// svg
import HelloSvg from '../../assets/svg/hello.svg'
import CreateAccountSvg from '../../assets/svg/create-account.svg'
import CreateRestaurantSvg from '../../assets/svg/create-restaurant.svg'
import CalManualSvg from '../../assets/svg/cal-manual.svg'
import HomeManualSvg from '../../assets/svg/home-manual.svg'
import MapManualSvg from '../../assets/svg/map-manual.svg'

import styles from './Home.module.sass'


export default function Home() {
  const [search, setSearch] = useState('')

  function searchRestaurants() {
    console.log('search')
  }

  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <div className={styles.links}>
          <Link to='/restaurant/login' label='login as restaurant' color='black' />
          <Link to='/restaurant/signup' label='create restaurant account' color='yellow' />
          <Link to='/login' label='sign in' color='blue' />
          <Link to='/signup' label='sign up' color='grey' />
        </div>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.searchBlock}>
        <div className={styles.block}>
          <Textfield className={styles.search} placeholder='city, i.e. Warsaw' value={search} onChange={e => setSearch(e.target.value)} />
          <Button className={styles.searchButton} desc='search' type='button' onClick={searchRestaurants} small color='black'  />
        </div>
      </div>
      <div className={styles.helloBlock}>
        <div className={styles.block}>
          <Heading label='Find and Book restaurants around You!' size='l' color='blue' />
          <StaticSvg src={HelloSvg} alt='hello image' />
        </div>
      </div>
      <div className={styles.manualBlock}>
        <div className={styles.block}>
          <Heading label='How waity works' size='m' color='white' />
          <div className={styles.manualRow}>
            <div className={styles.manual}>
              <StaticSvg src={MapManualSvg} alt='map manual image' />
              <Paragraph size='xl' color='white'>search city</Paragraph>
            </div>
            <ArrowSvg className={styles.arrow} />
            <div className={styles.manual}>
              <StaticSvg src={HomeManualSvg} alt='home manual image' />
              <Paragraph size='xl' color='white'>find restaurant</Paragraph>
            </div>
            <ArrowSvg className={styles.arrow} />
            <div className={styles.manual}>
              <StaticSvg src={CalManualSvg} alt='calendar manual image' />
              <Paragraph size='xl' color='white'>book spot</Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.signupBlock}>
        <div className={styles.block}>
          <StaticSvg src={CreateAccountSvg} alt='sign up image' />
          <div className={styles.navSignup}>
            <Heading size='m' color='blue' label='Don’t have an account?' />
            <Link to='/signup' label='sign up now' color='black' />
          </div>
        </div>
      </div>
      <div className={styles.restaurantBlock}>
        <div className={styles.block}>
          <div className={styles.navRestaurant}>
            <Heading label='do you have restaurants?' color='white' size='s' />
            <Heading label='Start cooperation!' color='blue' size='l' />
            <Link to='/restaurant/signup' label='create firm account' color='black' />
          </div>
          <StaticSvg src={CreateRestaurantSvg} alt='create restaurant account image' />
        </div>
      </div>
    </div>
  )
}
