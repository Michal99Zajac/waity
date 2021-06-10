import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import quertString, { ParsedQuery } from 'query-string'
import { useAuth } from '../../hooks/use-auth'
import { useHistory } from 'react-router'

import { Logo } from '../fundamental/images-n-icons/logo/logo'
import { Link } from '../fundamental/navigation/link/link'
import { SmallButton } from '../fundamental/actions/small-button/small-button'
import { UserList } from '../fundamental/navigation/user-list/user-list'
import { Textfield } from '../fundamental/forms/textfield/textfield'
import { InfoLabel } from '../fundamental/titles-n-text/info-label/info-label'
import { ReactComponent as Cross } from '../../assets/svg/basic/cross.svg'
import { CategoryContainer } from '../fundamental/navigation/category-container/category-container'
import { CategoryTab } from '../fundamental/navigation/category-tab/category-tab'
import { Button } from '../fundamental/actions/button/button'

import FranceJPG from '../../assets/img/categories/france.jpg'
import styles from './navbar.module.sass'


type NavbarTypes = {
  className?: string,
  firm?: boolean,
  client?: boolean
}

export function Navbar(props: NavbarTypes): JSX.Element {
  const [auth, setAuth] = useAuth()
  const history = useHistory()

  const [location, setLocation] = useState(history.location.pathname) // location for compare
  const [search, setSearch] = useState<ParsedQuery<string>>({ city: '', category: '' })
  const [city, setCity] = useState('')

  // set type of logo on start of navbar
  const logoType: 'firm' | 'client' | 'default' = (props.firm && 'firm') || (props.client && 'client') || 'default'

  // category tabs
  const categoryTabs = [
    <CategoryTab baseurl='search' category='All' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Italian' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Polish' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='France' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='German' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='American' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Russian' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Hungarian' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='English' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Swedish' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Hindu' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Japanese' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Mexican' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Taiwan' src={FranceJPG} alt='france foor image' />,
    <CategoryTab baseurl='search' category='Chinese' src={FranceJPG} alt='france foor image' />
  ]

  /**
   * return to the home page
   */
  function goHome() {
    history.push('/home')
  }

  /**
   * set to url query city param
   */
  function searchRestaurants() {
    const q = quertString.parse(history.location.search)
    q.city = city

    history.push(`/search?${quertString.stringify(q)}`)
  }

  /**
   * get UserList Component for specific role
   * 
   * @returns JSX.Element UserList Component
   */
  function getUserList(): JSX.Element | null {
    if (!auth) return null

    if (auth.roles.includes('client')) {
      const links = [
        <NavLink activeClassName={styles.active} to='/user/profile'>Your Profile</NavLink>,
        <NavLink activeClassName={styles.active} to='/user/order'>Your Order</NavLink>
      ]

      return <UserList username={auth.email} onLogout={() => setAuth(false)} links={links} />
    }

    if (auth.roles.includes('restaurant')) {
      const links = [
        <NavLink activeClassName={styles.active} to='/restaurant/profile'>Restaurant Profile</NavLink>,
        <NavLink activeClassName={styles.active} to='/restaurant/menu'>Restaurant Menu</NavLink>,
        <NavLink activeClassName={styles.active} to='/restaurant/table'>Restaurant Tables</NavLink>,
        <NavLink activeClassName={styles.active} to='/restaurant/reservation'>Restaurant Reservations</NavLink>
      ]

      return <UserList username={auth.tin} onLogout={() => setAuth(false)} links={links} />
    }

    return null
  }

  useEffect(() => {
    history.listen(() => { 
      setLocation(history.location.pathname)
      setSearch(quertString.parse(history.location.search))
    })
  }, [auth, history])

  return (
    <>
      <nav className={`${styles.navbar} ${props.className ?? ''} ${props.firm ? styles.firm : ''}`}>
        <div className={styles.leftDiv}>
          { location !== '/home' && <SmallButton svg={<Cross />} onClick={goHome} color='grey' /> }
          { !auth && <>
              <Link to='/login' color='yellow' label='sign in' />
              <Link to='/signup' color='black' label='sign up' />
              <Link to='/restaurant/login' color='grey' label='sign in as firm' />
              <Link to='/restaurant/signup' color='yellow' label='create firm account' />
            </>
          }
          { location === '/search' && <>
              <Textfield value={city} onChange={e => setCity(e.target.value)} placeholder='city i.e. London' />
              <Button desc='search' type='button' onClick={searchRestaurants} small color='black' />
              { (search.city && search.city !== '') && <InfoLabel label={search.city} /> }
            </>
          }
        </div>
        <Logo type={logoType} className={styles.logo} />
        <div className={styles.rightDiv}>
          { getUserList() }
        </div>
      </nav>
      { location === '/search' && <CategoryContainer>
          { categoryTabs }
        </CategoryContainer>
      }
    </>
  )
}
