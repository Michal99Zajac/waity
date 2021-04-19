import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import styles from './user-list.module.sass'
import { ReactComponent as Arrow} from '../../../../assets/svg/basic/arrow-up.svg'


type UserListTypes = {
  name: string,
  surname: string,
  onLogout: React.MouseEventHandler<HTMLButtonElement>,
  links: JSX.Element[]
}

/**
 * UserList Component - List in for navigation and with logout option
 * 
 * @param {object} props Object with props like
 * - name (string) - name of logged user
 * - surname (string) - surname of logged user
 * - onLogout (func) - function for log out a user
 * - links (NavLink[] | Link[]) - links for displaying
 * @returns JSX UserList Component
 */
export function UserList(props: UserListTypes): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const rollList = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <div className={styles.userList}>
      <button
        className={styles.outerButton}
        onClick={rollList}
      >
        <Arrow className={ isOpen ? styles.arrowClose : styles.arrowOpen } />
        <span>{props.name + ' ' + props.surname}</span>
      </button>
      <button onClick={props.onLogout} className={styles.innerButton}>logout</button>
      { isOpen && props.links &&
        <ul className={styles.list}>
          { props.links.map((link, index) => { return <li key={index}>{link}</li> }) }
        </ul>
      }
    </div>
  )
}
