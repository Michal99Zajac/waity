import React, { useState } from 'react'
import styles from './select.module.sass'
import { ReactComponent as ArrowUp} from '../../../../assets/svg/basic/arrow-up.svg'


type OptionsTypes = {
  value: string,
  id: string
}

type SelectTypes = {
  label?: string,
  firm?: boolean,
  placeholder: string,
  category: string,
  state: string,
  setState: React.Dispatch<React.SetStateAction<any>> | Function,
  options: OptionsTypes[],
  className?: string
}

/**
 * Select Component - lets merchants choose one option from an options menu
 * 
 * @param {object} props Object with props like
 * - label (string) - label of select
 * - placeholder (string) - init text when input is empty
 * - firm (bool) - indicates if input is for firm side
 * - category (string) - category of options
 * - state (string) - state to set
 * - setState (func) - function to change state
 * - options (object) - options with value and id
 * - className (string) - additional class for component
 * @returns JSX Select Component
 */
export function Select(props: SelectTypes): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const listHeight = props.options.length < 10 ? `${2.4 * props.options.length + 2}rem` : '70vh' // calculate size of select window

  // function close select window after the state change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setState(e.target.value)
    setIsOpen(false)
  }

  return (
    <div className={`
      ${styles.select}
      ${isOpen ? styles.selectOpen : ''}
      ${props.className ? props.className : ''}
    `}>
      { props.label && <label className={`${styles.label} ${props.firm ? styles.firm : ''}`}>{props.label}</label> }
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>{props.state || props.placeholder}</span>
        <ArrowUp />
        <div style={isOpen ? {height: listHeight} : {}} className={styles.selectList}>
          { props.options ? 
            props.options.map((option) => {
              return (
                <div key={option.id}>
                  <input
                    id={`${props.category}-${option.value}`}
                    type='radio'
                    value={option.value}
                    onChange={handleChange}
                    name={props.category}
                  />
                  <label htmlFor={`${props.category}-${option.value}`}>{option.value}</label>
                </div>
              )
            }) :
            null
          }
        </div>
      </button>
    </div>
  )
}
