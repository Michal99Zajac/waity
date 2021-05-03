import React from 'react'
import styles from './order-block.module.sass'


type OrderBlockTypes = {
  id: string,
  name: string,
  setId: Function,
  type: 'booked' | 'clean' | 'available' | 'timeout',
  label: string | 'available' | 'clean',
  className?: string
}

/**
 * OrderBlock Component - block for choose a client reservation on timeline
 * 
 * @param {object} props Object with props like
 * - id (string) - unique id of block in entire app
 * - className (string) - additional class for OrderBlock
 * - name (string) - category of data to choose
 * - setId (Function) - function for change current block to see
 * - type (string) - type for define visual color of block
 * - label (string) - text in center of block
 * @returns JSX OrderBlock Component
 */
export function OrderBlock(props: OrderBlockTypes): JSX.Element {
  return (
    <div className={`${styles.orderBlock} ${props.className ? props.className : ''}`}>
      <input
        onChange={(e) => props.setId(e.target.value)}
        id={props.id}
        name={props.name}
        value={props.id}
        type='radio'
      />
      <label
        htmlFor={props.id}
        className={styles[props.type]}
      >
        {props.label}
      </label>
    </div>
  )
}
