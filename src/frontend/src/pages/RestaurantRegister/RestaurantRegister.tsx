import React from 'react'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { Button } from '../../components/fundamental/actions/button/button'
import { SectionLabel } from '../../components/fundamental/titles-n-text/section-label/section-label'
import RestaurantRegisterSvg from '../../assets/svg/restaurant-register.svg'
import styles from './RestaurantRegister.module.sass'

/**
 * restaurant register page to complete registration of restaurant
 */
export default function RestaurantRegister(): JSX.Element {

  async function onSubmit() {
    console.log('submit')
  }

  return (
    <div className={styles.restaurantRegister}>
      <div className={styles.feedbackDiv}>
        <div className={styles.feedback}>
          <StaticSvg src={RestaurantRegisterSvg} alt='restaurant complete information svg' />
          <Heading size='l' label='We Need Some Informations!' color='black' />
        </div>
        <div className={styles.formDiv}>
          <form onSubmit={onSubmit} className={styles.form} >
            <SectionLabel label='Owner Basic Information' size='l' firm />
            <Button desc='register' type='submit' color='blue' />
          </form>
        </div>
      </div>
    </div>
  )
}
