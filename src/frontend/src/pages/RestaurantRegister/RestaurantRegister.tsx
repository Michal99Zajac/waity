import React, { useReducer } from 'react'
import { StaticSvg } from '../../components/fundamental/images-n-icons/static-svg/static-svg'
import { Heading } from '../../components/fundamental/titles-n-text/heading/heading'
import { Button } from '../../components/fundamental/actions/button/button'
import { Textfield } from '../../components/fundamental/forms/textfield/textfield'
import { Select } from '../../components/fundamental/forms/select/select'
import { SectionLabel } from '../../components/fundamental/titles-n-text/section-label/section-label'
import { Caption } from '../../components/fundamental/titles-n-text/caption/caption'
import RestaurantRegisterSvg from '../../assets/svg/restaurant-register.svg'
import restaurantReducer, { initState } from './reducer'
import styles from './RestaurantRegister.module.sass'


const countryOptions = [
  {
    id: '1',
    value: 'Poland'
  },
  {
    id: '2',
    value: 'United Kingdom'
  }
]

const typeOptions = [
  { id: '1', value: 'Italian' },
  { id: '2', value: 'Polish' },
  { id: '3', value: 'France' },
  { id: '4', value: 'German' },
  { id: '5', value: 'American' },
  { id: '6', value: 'Russian' },
  { id: '7', value: 'Hungarian' },
  { id: '8', value: 'English' },
  { id: '9', value: 'Swedish' },
  { id: '10', value: 'Hindu' },
  { id: '11', value: 'Japanese' },
  { id: '12', value: 'Mexican' },
  { id: '13', value: 'Taiwan' },
  { id: '14', value: 'Chinese' },
]

/**
 * restaurant register page to complete registration of restaurant
 */
export default function RestaurantRegister(): JSX.Element {
  const [state, dispatch] = useReducer(restaurantReducer, initState)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log('submit')
  }

  return (
    <div className={styles.restaurantRegister}>
      <div className={styles.feedbackDiv}>
        <div className={styles.feedback}>
          <StaticSvg src={RestaurantRegisterSvg} alt='restaurant complete information svg' />
          <Heading size='l' label='We Need Some Informations!' color='black' />
        </div>
        <div className={styles.formDiv}>
          <form onSubmit={onSubmit} className={styles.form} >
            <SectionLabel label='Owner Basic Information' size='l' firm />
            <Textfield placeholder='name' label='* owner name' firm value={state.ownerName} onChange={e => dispatch({ ...state, type: 'setOwnerName', ownerName: e.target.value })} />
            <Textfield placeholder='lastname' label='* ownerlastname' firm value={state.ownerLastname} onChange={e => dispatch({ ...state, type: 'setOwnerLastname', ownerLastname: e.target.value })} />
            <Textfield placeholder='email' label='* owner email' firm value={state.ownerEmail} onChange={e => dispatch({ ...state, type: 'setOwnerEmail', ownerEmail: e.target.value })} />
            <Textfield placeholder='phone' label='* owner phone' firm value={state.ownerPhone} onChange={e => dispatch({ ...state, type: 'setOwnerPhone', ownerPhone: e.target.value })} />
            <SectionLabel label='Owner Address' size='l' firm />
            <Select firm label='* owner address country' placeholder='-' category='ownerAddressCountry' options={countryOptions} state={state.ownerAddressCountry} setState={(country) => dispatch({ ...state, type: 'setOwnerAddressCountry', ownerAddressCountry: country })} />
            <Textfield placeholder='city' label='* owner address city' firm value={state.ownerAddressCity} onChange={e => dispatch({ ...state, type: 'setOwnerAddressCity', ownerAddressCity: e.target.value })} />
            <Textfield placeholder='postalcode' label='* owner address postalcode' firm value={state.ownerAddressPostalcode} onChange={e => dispatch({ ...state, type: 'setOwnerAddressPostalcode', ownerAddressPostalcode: e.target.value })} />
            <Textfield placeholder='address' label='* owner address' firm value={state.ownerAddress} onChange={e => dispatch({ ...state, type: 'setOwnerAddress', ownerAddress: e.target.value })} />
            <SectionLabel label='Restaurant Information' size='l' firm />
            <Textfield placeholder='restaurant name' label='* restaurant name' firm value={state.restaurantName} onChange={e => dispatch({ ...state, type: 'setRestaurantName', restaurantName: e.target.value })} />
            <Textfield placeholder='TIN' label='* TIN' firm value={state.restaurantTIN} onChange={e => dispatch({ ...state, type: 'setRestaurantTIN', restaurantTIN: e.target.value })} />
            <Select firm label='* restaurant type' placeholder='-' category='restaurant-type' options={typeOptions} state={state.restaurantType} setState={(type) => dispatch({ ...state, type: 'setRestaurantType', restaurantType: type })} />
            <SectionLabel label='Restaurant Contact' size='l' firm />
            <Textfield placeholder='email' label='* restaurant email' firm value={state.restaurantEmail} onChange={e => dispatch({ ...state, type: 'setRestaurantEmail', restaurantEmail: e.target.value })} />
            <Textfield placeholder='phone number' label='* restaurant phone' firm value={state.restaurantPhone} onChange={e => dispatch({ ...state, type: 'setRestaurantPhone', restaurantPhone: e.target.value })} />
            <Textfield placeholder='website address' label='* restaurant website' firm value={state.restaurantWebsite} onChange={e => dispatch({ ...state, type: 'setRestaurantWebsite', restaurantWebsite: e.target.value })} />
            <SectionLabel label='Restaurant Address' size='l' firm />
            <Select firm label='* country' placeholder='-' category='restaurantAddressCountry' options={countryOptions} state={state.restaurantAddressCountry} setState={(country) => dispatch({ ...state, type: 'setRestaurantAddressCountry', restaurantAddressCountry: country })} />
            <Textfield placeholder='city' label='* city' firm value={state.restaurantAddressCity} onChange={e => dispatch({ ...state, type: 'setRestaurantAddressCity', restaurantAddressCity: e.target.value })} />
            <Textfield placeholder='postalcode' label='* postalcode' firm value={state.restaurantAddressPostalcode} onChange={e => dispatch({ ...state, type: 'setRestaurantAddressPostalcode', restaurantAddressPostalcode: e.target.value })} />
            <Textfield placeholder='address' label='* address' firm value={state.restaurantAddress} onChange={e => dispatch({ ...state, type: 'setRestaurantAddress', restaurantAddress: e.target.value })} />
            <Button desc='register' type='submit' color='blue' />
          </form>
        </div>
        <div className={styles.footerDiv}>
          <Caption content='* required field' size='m' />
        </div>
      </div>
    </div>
  )
}
