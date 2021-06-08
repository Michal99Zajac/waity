import React, { useState } from 'react'
import { SmallButton } from '../../components/fundamental/actions/small-button/small-button'
import { Logo } from '../../components/fundamental/images-n-icons/logo/logo'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { Paragraph } from '../../components/fundamental/titles-n-text/paragraph/paragraph'
import { SectionLabel } from '../../components/fundamental/titles-n-text/section-label/section-label'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'
import { Select } from '../../components/fundamental/forms/select/select'
import { Datefield } from '../../components/fundamental/forms/datafield/datefield'
import { ReactComponent as Cross } from '../../assets/svg/basic/cross.svg'
import { useHistory } from 'react-router'
import CelebrationSvg from '../../assets/svg/celebration.svg'
import styles from './user-register.module.sass'


/**
 * UserRegister page to complete registration to the page
 */
export default function UserRegister() {
  const history = useHistory()
  const genderOptions = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Famale'
    },
    {
      id: '3',
      value: 'another'
    }
  ]
  const countryOptions = [
    {
      id: '1',
      value: 'Poland'
    },
    {
      id: '2',
      value: 'Germany'
    },
    {
      id: '3',
      value: 'United State of America'
    },
    {
      id: '4',
      value: 'Ireland'
    },
    {
      id: '5',
      value: 'France'
    }
  ]

  // data
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [date, setDate] = useState(new Date())
  const [gender, setGender] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')

  function goHome() {
    window.localStorage.removeItem('registerUser')
    history.push('/home')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      // TODO: send data on the server
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.userRegister}>
      <div className={styles.top}>
        <SmallButton svg={<Cross />} color='grey' onClick={goHome} />
        <Logo />
      </div>
      <div className={styles.feedbackBlock}>
        <div className={styles.feedback}>
          <Heading className={styles.heading} label='Almost There!' special size='xl' color='blue' />
          <StaticSvg className={styles.svg} alt='almost there image' src={CelebrationSvg} />
          <Paragraph className={styles.desc} size='xl' color='black'>
            You can login now to the application but stay and fill in the missing information
          </Paragraph>
        </div>
      </div>
      <div className={styles.formBlock}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <SectionLabel label='Personal Information' size='l' />
          <Textfield label='* first name' value={name} onChange={e => setName(e.target.value)} placeholder='name' />
          <Textfield label='* last name' value={lastname} onChange={e => setLastname(e.target.value)} placeholder='lastname' />
          <Datefield label='* date of birth' value={date} onChange={setDate} minDate={new Date(1900)} />
          <Select label='* gender' placeholder='gender' category='gender' state={gender} setState={setGender} options={genderOptions} />
          <SectionLabel label='Contact Information' size='l' />
          <Select label='* country' placeholder='country' category='country' state={country} setState={setCountry} options={countryOptions} />
          <Textfield label='* phone' value={phone} onChange={e => setPhone(e.target.value)} placeholder='phone number' />
        </form>
      </div>
      <div className={styles.footer}>
        <Paragraph className={styles.footerText} size='s' color='white'>* required filed</Paragraph>
      </div>
    </div>
  )
}
