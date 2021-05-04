import React from 'react'
import { ReactComponent as LogoSvg } from '../../../../assets/svg/logo.svg'


type LogoTypes = {
  className?: string
}

/**
 * Logo Component - Logo of Project
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * @returns JSX Logo Component
 */
export function Logo(props: LogoTypes): JSX.Element {
  return (
    <div className={props.className ? props.className : ''}>
      <LogoSvg />
    </div>
  )
}
