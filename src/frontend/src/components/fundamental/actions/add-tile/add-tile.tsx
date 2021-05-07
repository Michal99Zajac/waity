import React from 'react'
import styles from './add-tile.module.sass'


type AddTileTypes = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}

/**
 * AddTile Component - tile for add food on server
 * 
 * @param {object} props Object with props like
 * - onClick (Function) - action after click
 * - className (string) - additional class for component
 * @returns JSX AddTile Component
 */
export function AddTile(props: AddTileTypes): JSX.Element {
  return (
    <button onClick={props.onClick} className={`${styles.addTile} ${props.className ? props.className : ''}`}>
      <span>+</span>
    </button>
  )
}
