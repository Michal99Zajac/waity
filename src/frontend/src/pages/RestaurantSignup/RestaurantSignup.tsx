import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../../axios'
import { Logo } from '../../components/fundamental/images-n-icons/logo/logo'
import { ButtonLink } from '../../components/fundamental/navigation/button-link/button-link'
import { SmallButton } from '../../components/fundamental/actions/small-button/small-button'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { Button } from '../../components/fundamental/actions/button/button'
import { Passwordfield } from '../../components/fundamental/forms/passwordfield/passwordfield'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'
import { collectErrors } from '../../functions/collect-errors'
import { ReactComponent as Cross } from '../../assets/svg/basic/cross.svg'
import RestaurantSignupImg from '../../assets/img/restaurant-img/restaurant-signup.jpg'
import styles from './RestaurantSignup.module.sass'


type Error = {
  tin: any[],
  password: any[]
}

/**
 * restaurant sign up page for registration
 */
export default function RestaurantSignup() {
  const [tin, setTin] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<Error>({
    tin: [],
    password: []
  })

  const history = useHistory()

  function goHome() {
    history.push('/home')
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    setError({ tin: [], password: [] })
    event.preventDefault()

    try {
      if (confirmPassword !== password) {
        setPassword('')
        setConfirmPassword('')
        return setError({ tin: [], password: ['passwords are not match'] })
      }

      const res = await axios.post('/auth/restaurant/register', {
        tin: tin,
        password: password
      })

      const token = await axios.post('/auth/restaurant/login', {
        passcode: res.data.passcode,
        password: password
      })

      const data = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token.data.accessToken}`
        }
      })

      const registerRestaurant = {
        id: res.data.id,
        tin: data.data.tin,
        passcode: res.data.passcode,
        roles: data.data.role,
        token: token.data.accessToken
      }

      /**
       * save data to spec register form
       */
       window.localStorage.setItem('registerRestaurant', JSON.stringify(registerRestaurant))

      history.push('/co/register-restaurant')

    } catch (err) {
      console.log(err)
      setPassword('')
      setConfirmPassword('')

      const errs = collectErrors(err.response.data.error)
      if (Object.keys(errs).includes('error')) {
        setError({ tin: ['firm with this TIN already exists'], password: [] })
      } else {
        setError({...error, ...errs})
      }
    }
  }

  return (
    <div className={styles.restaurantSignup}>
      <div className={styles.mainContainer}>
        <div className={styles.top}>
          <span>
            <SmallButton svg={<Cross />} color='white' onClick={goHome} />
            <ButtonLink to='/co/login' color='white' content='sign in' />
          </span>
          <Logo className={styles.topLogo} />
        </div>
        <div className={styles.signupContainer}>
          <div className={styles.leftSignup}>
            <img className={styles.image} src={RestaurantSignupImg} alt='restaurant image signup'/>
            <Heading label='Join to the waity family!' size='xl' color='white' />
          </div>
          <form onSubmit={onSubmit} className={styles.rightSignup}>
            <Logo className={styles.blockLogo} />
            <Textfield
              placeholder='TIN'
              value={tin}
              onChange={e => setTin(e.target.value)}
              valid={error.tin.length !== 0}
              warning={error.tin}
            />
            <Passwordfield
              placeholder='password'
              value={password}
              valid={error.password.length !== 0}
              warning={error.password}
              onChange={e => setPassword(e.target.value)}
            />
            <Passwordfield
              placeholder='confirm password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <Button desc='sign up' type='submit' color='blue' />
          </form>
        </div>
      </div>
    </div>
  )
}
