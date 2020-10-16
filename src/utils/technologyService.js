import tokenService from '../utils/tokenService';
const BASE_URL = '/api/technologies';

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken(), }
    })
    .then(res => res.json());
}

export function create(tech) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
				'content-type': 'application/json',
				'Authorization': 'Bearer ' + tokenService.getToken(),
			},
      body: JSON.stringify(tech)
    }).then(res => res.json());
  }

  export function update(tech) {
    return fetch(`${BASE_URL}/${tech._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken(),
    },
      body: JSON.stringify(tech)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE', headers: {
				'content-type': 'application/json',
				'Authorization': 'Bearer ' + tokenService.getToken(),
			},
    }).then(res => res.json());
  }