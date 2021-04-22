import React from 'react'
import styles from './star-rating.module.sass'
import { ReactComponent as StarFillSvg } from '../../../../assets/svg/basic/star-fill.svg'
import { ReactComponent as StarEmptySvg } from '../../../../assets/svg/basic/star-empty.svg'


type StarRatingTypes = {
  scale: number,
  rating: number,
  label: string
}

/**
 * StarRating Component - rating information with star visualization 
 * 
 * @param {object} props Object with props like
 * - scale (number) - amount of all stars
 * - rating (number) - rating to visualization
 * - label (string) - label to display
 * @returns JSX StarRating Component
 */
export function StarRating(props: StarRatingTypes): JSX.Element {

  /**
   * get stars svg whit empty and fill content
   * 
   * @param scale number of all stars
   * @param rating number of star to fill color
   * @returns JSX.Element[] array of star svgs
   */
  const addRating = (scale: number, rating: number) => {
    let result = []

    for (let i = 0; i < scale; i++) {
      if (i < Math.round(rating)) {
        result.push(<StarFillSvg className={styles.star} />)
      } else {
        result.push(<StarEmptySvg className={styles.star} />)
      }
    }

    return result
  }

  return (
    <div className={styles.starRating}>
      <div className={styles.rating}>
        <p>{props.label}</p>
        <p>{props.rating}</p>
      </div>
      <div className={styles.stars}>
        {addRating(props.scale, props.rating).map(element => element)}
      </div>
    </div>
  )
}
