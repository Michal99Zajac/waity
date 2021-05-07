import React from 'react'
import styles from './add-panel.module.sass'


type AddPanelTypes = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  className?: string
}

/**
 * AddPanel Component - panel for add Table on server
 * 
 * @param {object} props Object with props like
 * - onClick (Function) - action after click
 * - className (string) - additional class for component
 * @returns JSX AddPanel Component
 */
export function AddPanel(props: AddPanelTypes): JSX.Element {
  return (
    <button onClick={props.onClick} className={`${styles.addPanel} ${props.className ? props.className : ''}`}>
      +
    </button>
  )
}
