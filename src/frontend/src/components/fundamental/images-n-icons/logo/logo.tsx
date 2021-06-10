import React from 'react'
import { ReactComponent as DefaultLogoSvg } from '../../../../assets/svg/logo/default-logo.svg'
import { ReactComponent as ClientLogoSvg } from '../../../../assets/svg/logo/client-logo.svg'
import { ReactComponent as FirmLogoSvg } from '../../../../assets/svg/logo/firm-logo.svg'


type LogoTypes = {
  type?: 'default' | 'firm' | 'client' | undefined,
  className?: string
}

/**
 * Logo Component - Logo of Project
 * 
 * @param {object} props Object with props like
 * - className (string) - additional class for component
 * - type (string) - logo type
 * @returns JSX Logo Component
 */
export function Logo(props: LogoTypes): JSX.Element {
  const logo: { [name: string]: JSX.Element } = {
    default: <DefaultLogoSvg />,
    firm: <FirmLogoSvg />,
    client: <ClientLogoSvg />
  }

  return (
    <div className={props.className ? props.className : ''}>
      { props.type ? logo[props.type] : <DefaultLogoSvg /> }
    </div>
  )
}
