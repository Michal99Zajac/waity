import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import axios from '../../axios'
import { Logo } from '../../components/fundamental/images-n-icons/logo/logo'
import { ButtonLink } from '../../components/fundamental/navigation/button-link/button-link'
import { SmallButton } from '../../components/fundamental/actions/small-button/small-button'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { Button } from '../../components/fundamental/actions/button/button'
import { Passwordfield } from '../../components/fundamental/forms/passwordfield/passwordfield'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'

import { ReactComponent as Cross } from '../../assets/svg/basic/cross.svg'
import RestaurantLoginImg from '../../assets/img/restaurant-img/restaurant-login.jpg'
import styles from './RestaurantLogin.module.sass'


export default function RestaurantLogin() {
  const [passcode, setPasscode] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const [auth, setAuth] = useAuth()

  function goHome() {
    history.push('/home')
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setError('')
    event.preventDefault()

    try {
      const token = await axios.post('/auth/restaurant/login', {
        passcode: passcode,
        password: password
      })

      const res = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token.data.accessToken}`
        }
      })

      setAuth({
        token: token.data.accessToken,
        ...res.data,
        roles: [...res.data.role]
      })

      window.location.reload()
      history.push('/co')

    } catch (err) {
      console.log(err)
      setPassword('')
      setError('passcode or password is not correct')
    }
  }

  return (
    <div className={styles.restaurantLogin}>
      <div className={styles.mainContainer}>
        <div className={styles.top}>
          <span>
            <SmallButton svg={<Cross />} color='white' onClick={goHome} />
            <ButtonLink to='/co/signup' color='white' content='sign up' />
          </span>
          <Logo className={styles.topLogo} />
        </div>
        <div className={styles.loginContainer}>
          <Logo className={styles.blockLogo} />
          <div className={styles.leftLogin}>
            <img className={styles.image} src={RestaurantLoginImg} alt='restaurant image login'/>
            <Heading label='Welcome, again!' size='xl' color='white' />
          </div>
          <form onSubmit={onSubmit} className={styles.rightLogin}>
            <Textfield
              placeholder='passcode'
              value={passcode}
              onChange={e => setPasscode(e.target.value)}
              valid={error !== ''}
              warning={error}
            />
            <Passwordfield
              placeholder='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button desc='sign in' type='submit' color='blue' />
          </form>
        </div>
      </div>
    </div>
  )
}
