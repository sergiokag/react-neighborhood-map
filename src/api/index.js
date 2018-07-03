import axios from 'axios'

export function getLocation(location) {
  
  const API_KEY = 'AIzaSyDkV06KWTh709fFp4UpMCGPNNwYrrVbPNU';
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?`;

  return axios.get( URL, {
    params: {
      language: 'en',
      address: location,
      components: 'country:gr |country:de',
      key: API_KEY
    }
  }).then( res => res.data.results[0] )
    .catch( err => console.err(err) )
       

}
