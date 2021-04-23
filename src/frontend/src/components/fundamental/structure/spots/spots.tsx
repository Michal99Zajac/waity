import React from 'react'
import styles from './spots.module.sass'


type Spot = {
  quantity: number,
  places: number
}

type SpotsTypes = {
  selected?: boolean,
  spots: Spot[]
}

/**
 * Spots Component - container for spots visualization
 * 
 * @param {object} props Object with props like
 * - selected (bool) - indicates if component is selected
 * - spots (array) - data array about quantity of spots and quantity of places
 * @returns JSX Spots Component
 */
export function Spots(props: SpotsTypes): JSX.Element {

  /**
   * get array of JSX spots Elements 
   * 
   * @param quantity number of spots
   * @param places number of places on spot
   * @returns array of spots as JSX.Element
   */
  const getSpots = (quantity: number, places: number): JSX.Element[] => {
    const spots: JSX.Element[] = []

    for (let i = 0; i < quantity; i++) {
      spots.push(<div style={{width: `${places * 2.5}rem`}} className={styles.spot}></div>)
    }

    return spots
  }

  return (
    <div className={`${styles.spots} ${props.selected ? styles.selected : ''}`}>
      { props.spots.map(spot => (
        getSpots(spot.quantity, spot.places).map(s => s)
      ))}
    </div>
  )
}
