import React from 'react'
import { Table, TableTypes } from '../fundamental/structure/table/table'
import { Spots, Spot } from '../fundamental/structure/spots/spots'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import { Button } from '../fundamental/actions/button/button'
import styles from './table-panel.module.sass'


type TablePanelTypes = {
  id: string,
  table: TableTypes,
  spots: Spot[],
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  facilities?: string[],
  className?: string,
}

/**
 * TablePanel Component - panel for visualization table and modify them
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * - id (string) - id of table
 * - table (object) - see! Table Component
 * - spots (array) - see! Spots Component
 * - onClick (Function) - action after click edit button
 * - facilities (string[]) - all facilities for table
 * @returns JSX TablePanel Component
 */
export function TablePanel(props: TablePanelTypes): JSX.Element {
  const id = props.id

  const onDelete = (): void => {
    // TODO: add delete to the server

    alert(`delete table ${id}`)
  }

  return (
    <div className={`${styles.tablePanel} ${props.className ? props.className : ''}`}>
      <Table {...props.table} />
      <div className={styles.middle}>
        <Spots spots={props.spots} />
        <div className={styles.facilities}>
          { props.facilities && props.facilities.map(facilitie => (
            <InfoLabel key={`${facilitie}-${id}`} status='none' size='s' label={facilitie} />
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button className={styles.delete} size='m' type='button' small color='white' onClick={onDelete} desc='delete' />
        <Button size='m' type='button' small color='blue' onClick={props.onClick} desc='edit' />
      </div>
    </div>
  )
}
