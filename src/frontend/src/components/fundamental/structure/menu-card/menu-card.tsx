import React from 'react'
import FoodImg from '../../../../assets/img/food/food.jpg'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import { InfoLabel } from '../../titles-n-text/info-label/info-label'
import { QuestionMark } from '../../feedback/question-mark/question-mark'
import styles from './menu-card.module.sass'


type MenuCardTypes = {
  price: string,
  foodName: string,
  msg?: string,
  className?: string,
  img?: string,
  alt?: string
}

/**
 * MenuCard Component - card for display food name and props in menu
 * 
 * @param {object} props Object with props like
 * - price (string) - price of menu food
 * - msg (string) - additional msg for menucard
 * - foodName (string) - name of food in menu
 * - className (string) - additional class for component
 * @returns JSX MenuCard Component
 */
export function MenuCard(props: MenuCardTypes): JSX.Element {
  return (
    <div className={`${styles.menuCard} ${props.className ? props.className : ''}`}>
      <img
        className={styles.img}
        src={props.img ? props.img : FoodImg}
        alt={props.alt ? props.alt : 'food img'}
      ></img>
      <div className={styles.absolute}>
        <div className={styles.info}>
          <InfoLabel status='inform' size='l' label={props.price} />
          {props.msg && <QuestionMark size='small' msg={props.msg} />}
        </div>
        <Paragraph size='l' className={styles.paragraph} >{props.foodName}</Paragraph>
      </div>
    </div>
  )
}
