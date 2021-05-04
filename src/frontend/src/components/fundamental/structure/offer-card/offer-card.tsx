import React from 'react'
import { Link } from 'react-router-dom'
import styles from './offer-card.module.sass'
import { SectionLabel } from '../../titles-n-text/section-label/section-label'
import { Caption } from '../../titles-n-text/caption/caption'
import { Paragraph } from '../../titles-n-text/paragraph/paragraph'
import { StarRating } from '../../feedback/star-rating/star-rating'
import { ReactComponent as CashSvg } from '../../../../assets/svg/basic/cash.svg'
import { ReactComponent as PlaceholderSvg } from '../../../../assets/svg/basic/placeholder.svg'


type OfferCardTypes = {
  to: string,
  src: string,
  alt: string,
  label: string,
  caption: string,
  location: string,
  price: string,
  rating: number,
  className?: string
}

/**
 * OfferCard Component - card with link for display brief of offert
 * 
 * @param {object} props Object with props like
 * - to (string) - path to location
 * - alt (string) - alternate text for an image, if the image cannot be displayed
 * - src (string) - path to the image
 * - label (string) - main label of card
 * - caption (string) - submain label of card
 * - location (string) - text with placeolder svg
 * - price (string) - text with cash svg
 * - rating (number) - rating number
 * - className (string) - additional class for component
 * @returns JSX OfferCard Component
 */
export function OfferCard(props: OfferCardTypes): JSX.Element {
  return (
    <Link className={`${styles.offerCard} ${props.className ? props.className : ''}`} to={props.to}>
      <div className={styles.offerContainer}>
        <StarRating scale={5} rating={props.rating} label='reviews' />
        <img src={props.src} alt={props.alt}></img>
        <div className={styles.offerInfo}>
          <SectionLabel offer label={props.label} />
          <Caption content={props.caption} />
          <span>
            <PlaceholderSvg />
            <Paragraph size='s'>{props.location}</Paragraph>
          </span>
          <span>
            <CashSvg />
            <Paragraph size='s'>{props.price}</Paragraph>
          </span>
        </div>
      </div>
    </Link>
  )
}
