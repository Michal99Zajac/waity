import React, { useState } from 'react'
import { Star } from '../fundamental/actions/star/star'
import { Paragraph } from '../fundamental/titles-n-text/paragraph/paragraph'
import styles from './star-picker.module.sass'


type StarPickerTypes = {
  range: number,
  rate: number,
  floatRate: number,
  label: string
}

/**
 * StarPicker Component - picker to rate restaurant
 * 
 * @param {object} props Object with props like
 * - range (number) - amount of all stars
 * - rate (number) - current rate of user for restaurant
 * - floatRate (number) - avarage rate of all rates
 * - label (string) - label of component
 * @returns JSX StarPicker Component
 */
export function StarPicker(props: StarPickerTypes): JSX.Element {
  const [rate, setRate] = useState(props.rate)

  const getStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = []

    for (let i = 0; i < props.range; i++) {
      stars.push(
        <span className={styles.star} key={`${i}-star`}>
          <input id={`${i}-star`} type="submit"></input>
          <label htmlFor={`${i}-star`}>
            <Star value={i + 1} setRate={setRate} rate={rate} />
          </label>
        </span>
      )
    }

    return stars
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    // TODO: post data to the server
    console.log(rate)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.starPicker}>
      <span>
        <Paragraph size='m' color='white'>{props.label}</Paragraph>
        <Paragraph size='m' color='white'>{props.floatRate.toString()}</Paragraph>
      </span>
      <div className={styles.stars}>
        { getStars().map(star => star) }
      </div>
    </form>
  )
}
