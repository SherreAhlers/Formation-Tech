const BASE_URL = '/api/technologies';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(tech) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(tech)
    }).then(res => res.json());
  }

  export function update(tech) {
    return fetch(`${BASE_URL}/${tech._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(tech)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }