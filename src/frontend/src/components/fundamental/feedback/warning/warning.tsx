import React from 'react'
import styles from './warning.module.sass'
import { ReactComponent as Svg } from '../../../../assets/svg/basic/important.svg'


type WarningTypes = {
  msg: string | string[],
  className?: string
}

/**
 * Warning Component - svg with hide text for for information about error
 * 
 * @param {object} props Object with props like
 * - msg (string | string[]) - msg or msgs for display
 * - className (string) - additional class for component
 * @returns JSX Warning Component
 */
export function Warning(props: WarningTypes): JSX.Element {
  return (
    <div className={`${styles.warning} ${props.className ? props.className : ''}`}>
      <Svg />
      <p>
        { Array.isArray(props.msg) && props.msg.length !== 1 ? props.msg.map((message) => {
          return (
            <>
              • {message}<br/>
            </>
          )
        }) : props.msg }
      </p>
    </div>
  )
}
