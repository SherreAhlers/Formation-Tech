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