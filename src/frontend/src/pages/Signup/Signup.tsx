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
import SignUp from '../../assets/svg/sign-up.svg'
import { collectErrors } from '../../functions/collect-errors'
import styles from './Signup.module.sass'


type Error = {
  email: any[],
  password: any[]
}

/**
 * Page for register user
 */
export default function SignupPage(): JSX.Element {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState<Error>({
    email: [],
    password: []
  })
  const history = useHistory()

  /**
   * function to go last page
   */
  function goHome() { history.goBack() }

  /**
   * function to handle submit button click and send data to server
   */
  async function handleSubmit(event: any) {
    event.preventDefault()
    setError({ email: [], password: [] })

    try {
      if (confirmPassword !== password) {
        setPassword('')
        setConfirmPassword('')
        return setError({ email: [], password: ['passwords are not match'] })
      }

      const res = await axios.post('/auth/register', {
        email: email,
        password: password
      })

      const registerUser = {
        id: res.data.id,
        email: res.data.email,
        roles: res.data.roles.map((role: any) => role.name)
      }

      /**
       * save data to spec register form
       */
      window.localStorage.setItem('registerUser', JSON.stringify(registerUser))

      history.push('/user-register')

    } catch (err) {
      console.log(err)

      const errs = collectErrors(err.response.data.error)
      if (Object.keys(errs).includes('error')) {
        setError({ email: ['email already exists'], password: [] })
      } else {
        setError({...error, ...collectErrors(err.response.data.error)})
      }
    }

    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className={styles.signupPage}>
      <div className={styles.top}>
        <span>
          <SmallButton svg={<Cross />} color='blue' onClick={goHome} />
          <ButtonLink color='blue' content='sign in' to='/login' />
        </span>
        <Logo className={styles.topLogo} />
      </div>
      <div className={styles.block}>
        <StaticSvg src={SignUp} alt='waity-login' />
        <Logo className={styles.blockLogo} />
        <div className={styles.form}>
          <DisplayText text='Go! Sign up!' />
          <form onSubmit={handleSubmit}>
            <Textfield
              valid={error.email.length !== 0}
              warning={error.email}
              className={styles.mbottom}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='email@email.com'
            />
            <Passwordfield
              warning={error.password}
              valid={error.password.length !== 0}
              className={styles.mbottom}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='password'
            />
            <Passwordfield
              className={styles.mbottom}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder='confirm password'
            />
            <Button type='submit' color='black' desc='sign up' />
          </form>
        </div>
      </div>
    </div>
  )
}
