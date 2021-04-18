import React from 'react'
import styles from './category-tab.module.sass'
import { NavLink } from 'react-router-dom'


type CategoryTabTypes = {
  baseurl: string,
  category: string,
  src: string,
  alt: string
}

/**
 * CategoryTab Component - Navigation link with photo
 * 
 * @param {object} props Object with props like
 * - baseurl (string) - origin of path to connect with additional path
 * - category (string) - additional path and label for link
 * - src (string) - path to image
 * - alt (string) - alternate text for an image, if the image cannot be displayed.
 * @returns JSX CategoryTab Component
 */
export function CategoryTab(props: CategoryTabTypes): JSX.Element {
  return (
    <div className={styles.CategoryTab}>
      <NavLink activeClassName={styles.active} to={`${props.baseurl}/${props.category}`}>
        <img src={props.src} alt={props.alt} />
      </NavLink>
      <label>{props.category}</label>
    </div>
  )
}
