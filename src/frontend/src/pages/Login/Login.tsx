import React, { useState } from 'react'
import axios from '../../axios'
import { useHistory } from 'react-router'
import { DisplayText } from '../../components/fundamental/titles-n-text/display-text/display-text'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'
import { Passwordfield } from '../../components/fundamental/forms/passwordfield/passwordfield'
import { Button } from '../../components/fundamental/actions/button/button'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Logo } from '../../components/fundamental/images-n-icons/logo/logo'
import { SmallButton } from '../../components/fundamental/actions/small-button/small-button'
import { ButtonLink } from '../../components/fundamental/navigation/button-link/button-link'
import { ReactComponent as Cross } from '../../assets/svg/basic/cross.svg'
import SignIn from '../../assets/svg/sign-in.svg'
import { useAuth } from '../../hooks/use-auth'
import styles from './Login.module.sass'


/**
 * Page for auth user by login him
 */
export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [auth, setAuth] = useAuth()
  const history = useHistory()

  /**
   * function to exec after cross button click
   */
  function goHome() { history.push('/home') }

  /**
   * Function to handle action after submit button click
   * 
   * @param event submit event
   */
  async function handleSubmit(event: any) {
    setError('')
    event.preventDefault()

    try {
      let token = await axios.post('/auth/login', {
        email: email,
        password: password
      })

      const res = await axios.get('/auth/user', {
        headers: {
          Authorization: `Bearer ${token.data.accessToken}`
        }
      })

      setAuth({
        token: token.data.accessToken,
        ...res.data
      })

      window.location.reload()
      history.push('/home')

    } catch (err) {
      setError('email or password is not correct')
      console.log(err)
      setPassword('')
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.top}>
        <span>
          <SmallButton svg={<Cross />} color='blue' onClick={goHome} />
          <ButtonLink color='blue' content='sign up' to='/signup' />
        </span>
        <Logo className={styles.topLogo} />
      </div>
      <div className={styles.block}>
        <StaticSvg src={SignIn} alt='waity-login' />
        <Logo className={styles.blockLogo} />
        <div className={styles.form}>
          <DisplayText text='Hi! Sign in!' />
          <form onSubmit={handleSubmit}>
            <Textfield
              valid={error !== ''}
              warning={error}
              className={styles.mbottom}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='email@email.com'
            />
            <Passwordfield
              className={styles.mbottom}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='password'
            />
            <Button type='submit' color='black' desc='sign in' />
          </form>
        </div>
      </div>
    </div>
  )
}
