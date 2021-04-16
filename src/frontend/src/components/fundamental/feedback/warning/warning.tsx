import React from 'react'
import { ReactComponent as Svg } from '../../../../assets/svg/basic/important.svg'


type WarningTypes = {
  msg: string
}

export function Warning(props: WarningTypes) {
  return (
    <div>
      <Svg />
    </div>
  )
}
