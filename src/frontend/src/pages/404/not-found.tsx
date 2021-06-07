import React from 'react'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Link } from '../../components/fundamental/navigation/link/link'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import NotFoundSvg from '../../assets/svg/not-found.svg'
import styles from './not-found.module.sass'


export default function NotFound(): JSX.Element {
  return (
    <div className={styles.notFound}>
      <div className={styles.svgBlock}>
        <StaticSvg className={styles.svg} alt='not found' src={NotFoundSvg} />
        <Heading className={styles.heading} label='404' size='xll' color='blue' special />
      </div>
      <Link className={styles.link} color='black' to='/home' label='go home!' />
    </div>
  )
}
