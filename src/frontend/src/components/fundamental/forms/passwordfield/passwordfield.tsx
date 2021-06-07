import React from 'react'
import { Link } from 'react-router-dom'
import styles from './passwordfield.module.sass'
import { Warning } from '../../feedback/warning/warning'


type PasswordfieldTypes = {
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  warning?: string | string[]
  valid?: boolean,
  disabled?: boolean,
  to?: string,
  className?: string
}

/**
 * Passwordfield Component - A text field is an input field that clients can type password
 * 
 * @param {object} props Object with props like
 * - disabled (bool) - indicates whether the input is disabled
 * - value (string) - value of input
 * - onChange (func) - function for change the input value
 * - placeholder (string) - init text when input is empty
 * - warning (string) - messages to information client about error
 * - valid (bool) - indicates if input is valid
 * - to (string) - relative link path
 * - className (string) - additional class for component
 * @returns JSX Passwordfield Component
 */
export function Passwordfield(props: PasswordfieldTypes): JSX.Element {
  return (
    <div className={`${styles.passwordinput} ${props.className ? props.className : ''}`}>
      <div>
        <input disabled={props.disabled} type='password' placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
        { props.valid && props.warning && <div className={props.to ? '' : styles.smallRight}>
            <Warning className={props.to ? '' : styles.smallRight} msg={props.warning} />
          </div> }
        { props.to && <Link to={props.to}>forgot?</Link> }
      </div>
    </div>
  )
}
