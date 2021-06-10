import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import queryString from 'query-string'
import styles from './category-tab.module.sass'


type CategoryTabTypes = {
  baseurl: string,
  category: string,
  src: string,
  alt: string,
  className?: string
}

/**
 * CategoryTab Component - Navigation link with photo
 * 
 * @param {object} props Object with props like
 * - baseurl (string) - origin of path to connect with additional path
 * - category (string) - additional path and label for link
 * - src (string) - path to image
 * - alt (string) - alternate text for an image, if the image cannot be displayed.
 * - className (string) - additional class for component
 * @returns JSX CategoryTab Component
 */
export function CategoryTab(props: CategoryTabTypes): JSX.Element {
  const history = useHistory()

  const [query, setQuary] = useState(queryString.stringify(
    (() => {
      const s = queryString.parse(history.location.search)
      s.category = props.category

      return s
    })()
  ))
  const [active, setActive] = useState(history.location.search.includes(`category=${props.category}`))

  console.log(query)

  useEffect(() => {
    history.listen(() => {
      // set variable to mark active tab
      setActive(history.location.search.includes(`category=${props.category}`))

      // change query if city is set
      const s = queryString.parse(history.location.search)
      s.category = props.category
      setQuary(queryString.stringify(s))
    })
  }, [history])

  return (
    <div className={`${styles.CategoryTab} ${props.className ? props.className : ''}`}>
      <NavLink activeClassName={ active ? styles.active : '' } to={`${props.baseurl}?${query}`}>
        <img src={props.src} alt={props.alt} />
      </NavLink>
      <label>{props.category}</label>
    </div>
  )
}
