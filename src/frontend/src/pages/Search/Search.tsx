import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import queryString from 'query-string'
import { OfferCard } from '../../components/fundamental/structure/offer-card/offer-card'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import RestaurantImg from '../../assets/img/restaurants/restaurant_one.jpg'
import styles from './Search.module.sass'


// mock of restaurant
const restaurant =  {
  id: '1',
  name: 'restaurant',
  category: 'italian',
  location: 'location',
  price: 12.34,
}

/**
 * Search page for search restaurant to book spot
 */
export default function Search() {
  const history = useHistory()

  const [restaurants, setRestaurants] = useState<any[]>([])
  const [query, setQuery] = useState(queryString.parse(history.location.search))

  async function fetchRestaurants() {
    const query = queryString.parse(history.location.search)

    try {
      let rests: any[] = []
      for (let i = 1; i < 100; i++) {
        const rest = {...restaurant, id: i.toString(), category: query.category, location: query.city}
        rests.push(rest)
      }
      setRestaurants(rests)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchRestaurants()

    history.listen(() => {
      fetchRestaurants()
      setQuery(queryString.parse(history.location.search))
    })
  }, [])

  return (
    <div className={styles.search}>
      <Heading size='xll' className={styles.heading} label={query.category?.toString() ?? 'All'}  />
      { restaurants.map(restaurant => (
        <div className={styles.offerCard}>
          <OfferCard
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            label={restaurant.name}
            caption={restaurant.category}
            location={restaurant.location}
            alt='restaurant image'
            src={RestaurantImg}
            price={restaurant.price}
          />
        </div>
      )) }
    </div>
  )
}
