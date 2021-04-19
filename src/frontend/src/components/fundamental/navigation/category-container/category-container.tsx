import React, { useState } from 'react'
import styles from './category-container.module.sass'
import { SmallButton } from '../../actions/small-button/small-button'
import { ReactComponent as ArrowUp} from '../../../../assets/svg/basic/arrow-up.svg'


type CategoryContainerTypes = {
  children: JSX.Element[]
}

/**
 * CategoryContainer Component - Container for CategoryTab Components
 * 
 * @param {object} props Object with props like
 * - children (CategoryTab[]) - list of CategoryTab components
 * @returns JSX CategoryContainer Component
 */
export function CategoryContainer(props: CategoryContainerTypes): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={isOpen ? styles.open : styles.close}>
      <ul>
        {props.children}
      </ul>
      <p>category</p>
      <SmallButton color='white' onClick={() => setIsOpen(!isOpen)} svg={<ArrowUp />} />
    </div>
  )
}
