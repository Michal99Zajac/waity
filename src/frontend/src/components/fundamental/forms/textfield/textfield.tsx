import React from 'react'
import styles from './textfield.module.sass'
import { Warning } from '../../feedback/warning/warning'


type TextfieldTypes = {
  label?: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  warning?: string | string[]
  valid?: boolean,
  firm?: boolean,
  disabled?: boolean
}

/**
 * Textfield Component - A text field is an input field that clients can type into
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the input is disabled
 * - label (string) - label of input
 * - value (string) - value of input
 * - onChange (func) - function for change the input value
 * - placeholder (string) - init text when input is empty
 * - warning (string) - messages to information client about error
 * - valid (bool) - indicates if input is valid
 * - firm (bool) - indicates if input is for firm side
 * @returns JSX Textfield Component
 */
export function Textfield(props: TextfieldTypes): JSX.Element {
  return (
    <div className={`${styles.textinput} ${props.disabled ? styles.disabled : ''}`}>
      { props.label && <label className={props.firm ? styles.firm : undefined}>{props.label}</label> }
      <div>
        <input disabled={props.disabled} type='text' placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        { props.valid && props.warning && <div><Warning msg={props.warning} /></div> }
      </div>
    </div>
  )
}
