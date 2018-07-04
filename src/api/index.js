// libs
import { locations } from '../data/locations-list'

export function getLocation(value) {

  const regex = new RegExp(value, 'gi');

  return locations.filter( location => location.title.match(regex) )
}
