/**
 * @description: This file is for fetching data from the Foursquare api
 */


const ID = '1V340QFFYS0YJDOF01YIVZUYB5B1PB0RRL2G4FMS2ZMBNQFD';
const S_KEY = 'JVUFVZJ35JTNRIGL303QL4G0JSNXA00PWWRR4F5ZSPE2R4PO';

function getRawResults(inputValue) {
  
  // config
  const params = {
    client_id: ID,
    client_secret: S_KEY,
    near: 'Athens, Greece',
    query: inputValue,
    radius: 5000,
    v: '20180323',
    limit: 10
  };

  return fetch(`https://api.foursquare.com/v2/venues/search/?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}&near=${params.near}&query=${params.query}&radius=${params.radius}&limit=${params.limit}`);
}

export function getLocation(value) {

  const willGetLocations = getRawResults(value);

  return willGetLocations;
}

export function getFourSquareInfo(obj) {

    const { v_id, lat, lng } = obj;

    const params = {
      client_id: ID,
      client_secret: S_KEY,
      ll: `${lat},${lng}`,
      v: '20180323',
      limit: 1
    };
    
    return fetch(`https://api.foursquare.com/v2/venues/${v_id}/?client_id=${params.client_id}&client_secret=${params.client_secret}&v=${params.v}&ll=${params.ll},&limit=${params.limit}`);
}
