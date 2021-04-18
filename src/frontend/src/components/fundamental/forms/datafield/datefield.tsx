import React from 'react'
import DatePicker from 'react-date-picker'
import styles from './datefield.module.sass'
import './datefield.sass'
import { Warning } from '../../feedback/warning/warning'


type DatefieldTypes = {
  onChange: any,
  value: Date,
  valid?: boolean,
  warning?: string | string[],
  label?: string,
  firm?: boolean,
  disabled?: boolean
}

/**
 * Datefield Component - A date field is an input field that 
 * clients can type or choose date
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the input is disabled
 * - label (string) - label of input
 * - value (Date) - value of input
 * - onChange (any) - function for change the input value
 * - warning (string | string[]) - messages to information client about error
 * - valid (bool) - indicates if input is valid
 * - firm (bool) - indicates if input is for firm side
 * @returns JSX Textfield Component
 */
export function Datefield(props: DatefieldTypes): JSX.Element {
  return (
    <div className={`${styles.datefield} ${props.valid ? 'datepicker-valid' : ''} ${props.disabled ? styles.disabled : ''}`}>
      { props.label && <label className={props.firm ? styles.firm : undefined}>{props.label}</label> }
      <div className={styles.divInput}>
        <DatePicker format='d/M/y' disabled={props.disabled} value={props.value} onChange={props.onChange} />
        { props.valid && props.warning && <div className={styles.warning}><Warning msg={props.warning} /></div> }
      </div>
    </div>
  )
}
