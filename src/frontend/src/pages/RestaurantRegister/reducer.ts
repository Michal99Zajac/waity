export interface StateTypes {
  ownerName: string,
  ownerLastname: string,
  ownerEmail: string,
  ownerPhone: string,
  ownerAddressCountry: string,
  ownerAddressCity: string,
  ownerAddressPostalcode: string,
  ownerAddress: string,
  restaurantName: string,
  restaurantTIN: string,
  restaurantType: string,
  restaurantEmail: string,
  restaurantPhone: string,
  restaurantWebsite: string,
  restaurantAddressCountry: string,
  restaurantAddressCity: string,
  restaurantAddressPostalcode: string,
  restaurantAddress: string
}

export interface ActionTypes extends StateTypes {
  type: 'setOwnerName' | 'setOwnerLastname' | 'setOwnerEmail' | 'setOwnerPhone' | 'setOwnerAddressCountry' |
        'setOwnerAddressCity' | 'setOwnerAddressPostalcode' | 'setOwnerAddress' | 'setRestaurantName' |
        'setRestaurantTIN' | 'setRestaurantType' | 'setRestaurantEmail' | 'setRestaurantPhone' |
        'setRestaurantWebsite' | 'setRestaurantAddressCountry' | 'setRestaurantAddressCity' |
        'setRestaurantAddressPostalcode' | 'setRestaurantAddress'
}

/**
 * reducer for register restaurant operation
 */
 export default (state: StateTypes, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case 'setOwnerName':
      return {...state, ownerName: action.ownerName}
    case 'setOwnerLastname':
      return {...state, ownerLastname: action.ownerLastname}
    case 'setOwnerEmail':
      return {...state, ownerEmail: action.ownerEmail}
    case 'setOwnerPhone':
      return {...state, ownerPhone: action.ownerPhone}
    case 'setOwnerAddressCountry':
      return {...state, ownerAddressCountry: action.ownerAddressCountry}
    case 'setOwnerAddressCity':
      return {...state, ownerAddressCity: action.ownerAddressCity}
    case 'setOwnerAddressPostalcode':
      return {...state, ownerAddressPostalcode: action.ownerAddressPostalcode}
    case 'setOwnerAddress':
      return {...state, ownerAddress: action.ownerAddress}
    case 'setRestaurantName':
      return {...state, restaurantName: action.restaurantName}
    case 'setRestaurantTIN':
      return {...state, restaurantTIN: action.restaurantTIN}
    case 'setRestaurantType':
      return {...state, restaurantType: action.restaurantType}
    case 'setRestaurantEmail':
      return {...state, restaurantEmail: action.restaurantEmail}
    case 'setRestaurantPhone':
      return {...state, restaurantPhone: action.restaurantPhone}
    case 'setRestaurantWebsite':
      return {...state, restaurantWebsite: action.restaurantWebsite}
    case 'setRestaurantAddressCountry':
      return {...state, restaurantAddressCountry: action.restaurantAddressCountry}
    case 'setRestaurantAddressCity':
      return {...state, restaurantAddressCity: action.restaurantAddressCity}
    case 'setRestaurantAddressPostalcode':
      return {...state, restaurantAddressPostalcode: action.restaurantAddressPostalcode}
    case 'setRestaurantAddress':
      return {...state, restaurantAddress: action.restaurantAddress}
    default:
      return {...state}
  }
}

const restaurant = JSON.parse(window.localStorage.getItem('registerRestaurant') ?? '{}')

/**
 * init state of user
 */
export const initState: StateTypes = {
  ownerName: '',
  ownerLastname: '',
  ownerEmail: '',
  ownerPhone: '',
  ownerAddressCountry: '',
  ownerAddressCity: '',
  ownerAddressPostalcode: '',
  ownerAddress: '',
  restaurantName: '',
  restaurantTIN: restaurant ? restaurant.tin : '',
  restaurantType: '',
  restaurantEmail: '',
  restaurantPhone: '',
  restaurantWebsite: '',
  restaurantAddressCountry: '',
  restaurantAddressCity: '',
  restaurantAddressPostalcode: '',
  restaurantAddress: ''
}
