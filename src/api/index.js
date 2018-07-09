// libs
import { locations } from '../data/locations-list'
import axios from 'axios'

export function getLocation(value) {

  const regex = new RegExp(value, 'gi');

  return locations.filter( location => location.title.match(regex) )
}

export function getFourSquareInfo(lat, lng) {
    const params = {
      client_id: '1V340QFFYS0YJDOF01YIVZUYB5B1PB0RRL2G4FMS2ZMBNQFD',
      client_secret: 'JVUFVZJ35JTNRIGL303QL4G0JSNXA00PWWRR4F5ZSPE2R4PO',
      ll: `${lat},${lng}`,
      v: '20180323',
      limit: 1
    };

    return axios.get(`https://api.foursquare.com/v2/venues/explore`, {
      params
    }) 
}
