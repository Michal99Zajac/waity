import React from 'react'
import { Paragraph } from '../fundamental/titles-n-text/paragraph/paragraph'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import { Button } from '../fundamental/actions/button/button'
import CameraSvg from '../../assets/svg/basic/camera.svg'
import styles from './food-tile.module.sass'


type FoodTileTypes = {
  id: string,
  label: string,
  desc: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  price: string,
  src?: string,
  alt?: string,
  className?: string
}

/**
 * FoodTile Component - rpanel for inform about near or past reservations
 * 
 * @param {object} props Object with props like
 * - id (string) - id of food
 * - label (string) - name of food
 * - desc (string) - food description
 * - onClick (Function) - action after edit button click
 * - price (string) - food price
 * - src (string) - path to the food image
 * - alt (string) - alt text if image wont display
 * - className (string) - additional class for component
 * @returns JSX FoodTile Component
 */
export function FoodTile(props: FoodTileTypes): JSX.Element {
  const id = props.id

  const deleteFood = (): void => {
    // TODO: delete food from server

    alert('delete food ' + id)
  }

  return (
    <div className={`${styles.foodTile} ${props.className ? props.className : ''}`}>
      <div className={styles.head}>
        { props.src ? <img src={props.src} alt={props.alt}></img> : <img className={styles.defaultImg} src={CameraSvg} alt='default pic'></img>}
        <Paragraph size='xl' color='black'>{props.label}</Paragraph>
      </div>
      <div className={styles.price}>
        <InfoLabel status='inform' label='price' />
        <InfoLabel status='none' label={props.price} />
      </div>
      <Paragraph className={styles.desc} color='grey' size='s'>{props.desc}</Paragraph>
      <div className={styles.buttons}>
        <Button small type='button' onClick={deleteFood} size='m' desc='delete' color='white' />
        <Button small type='button' onClick={props.onClick} size='m' desc='edit' color='yellow' />
      </div>
    </div>
  )
}
