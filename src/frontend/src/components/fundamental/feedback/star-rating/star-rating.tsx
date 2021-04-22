import React from 'react'
import styles from './star-rating.module.sass'
import { ReactComponent as StarFillSvg } from '../../../../assets/svg/basic/star-fill.svg'
import { ReactComponent as StarEmptySvg } from '../../../../assets/svg/basic/star-empty.svg'


type StarRatingTypes = {
  scale: number,
  rating: number,
  label: string
}

export function StarRating(props: StarRatingTypes): JSX.Element {
  const addRating = (scale: number) => {
    let result = []

    for (let i = 0; i < scale; i++) {
      if (i < Math.round(props.rating)) {
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
        {addRating(props.scale).map(element => element)}
      </div>
    </div>
  )
}
