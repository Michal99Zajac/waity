import React from 'react'
import DatePicker from 'react-date-picker'
import styles from './datefield.module.sass'
import './datefield.sass'
import { Warning } from '../../feedback/warning/warning'


type DatefieldTypes = {
  onChange: any,
  value: Date,
  minDate: Date,
  valid?: boolean,
  warning?: string | string[],
  label?: string,
  firm?: boolean,
  disabled?: boolean,
  className?: string
}

/**
 * Datefield Component - A date field is an input field that 
 * clients can type or choose date
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the input is disabled
 * - minDate (Date) - min Date to select
 * - label (string) - label of input
 * - value (Date) - value of input
 * - onChange (any) - function for change the input value
 * - warning (string | string[]) - messages to information client about error
 * - valid (bool) - indicates if input is valid
 * - firm (bool) - indicates if input is for firm side
 * - className (string) - additional class for component
 * @returns JSX Datefield Component
 */
export function Datefield(props: DatefieldTypes): JSX.Element {
  return (
    <div className={`
      ${styles.datefield}
      ${props.valid ? 'datepicker-valid' : ''}
      ${props.disabled ? styles.disabled : ''}
      ${props.className ? props.className : ''}
    `}>
      { props.label && <label className={props.firm ? styles.firm : undefined}>{props.label}</label> }
      <div className={styles.divInput}>
        <DatePicker className='static-datefield' format='d/M/y' minDate={props.minDate} disabled={props.disabled} value={props.value} onChange={props.onChange} />
        { props.valid && props.warning && <div className={styles.warning}><Warning msg={props.warning} /></div> }
      </div>
    </div>
  )
}
