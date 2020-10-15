import tokenService from '../utils/tokenService';
const BASE_URL = '/api/comments/';


export function create(comments, techId) {
      return fetch(BASE_URL + techId, {
        method: 'POST',
        headers: {
                  'content-type': 'application/json',
                  'Authorization': 'Bearer ' + tokenService.getToken(),
              },
        body: JSON.stringify(comments)
      }).then(res => res.json());
    }