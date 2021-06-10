import React, { useState } from 'react'
import styles from './user-list.module.sass'
import { ReactComponent as Arrow} from '../../../../assets/svg/basic/arrow-up.svg'


type UserListTypes = {
  username: string,
  onLogout: React.MouseEventHandler<HTMLButtonElement>,
  links: JSX.Element[],
  className?: string
}

/**
 * UserList Component - List in for navigation and with logout option
 * 
 * @param {object} props Object with props like
 * - username (string) - email, name or any id of user
 * - onLogout (func) - function for log out a user
 * - links (NavLink[] | Link[]) - links for displaying
 * - className (string) - additional class for component
 * @returns JSX UserList Component
 */
export function UserList(props: UserListTypes): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const listSize = props.links.length < 10 ? `${props.links.length * 2 + 2}rem` : '70vh'

  return (
    <div className={`${styles.userList} ${props.className ?? ''}`}>
      <button
        className={styles.outerButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Arrow className={ isOpen ? styles.arrowClose : styles.arrowOpen } />
        <span>{props.username}</span>
      </button>
      <button onClick={props.onLogout} className={styles.innerButton}>logout</button>
      { props.links &&
        <ul style={isOpen ? {height: listSize} : {}} className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
          { props.links.map((link, index) => { return <li key={index}>{link}</li> }) }
        </ul>
      }
    </div>
  )
}
