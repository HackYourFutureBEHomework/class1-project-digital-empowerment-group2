

const API_URL = 'http://localhost:4000';



const headers = new Headers({
  'Content-Type': 'application/json',
  
});

export const getPaths = () => {
  return fetch(`${API_URL}/path`).then(response => response.json());
};

export const getPath = id => {
  return fetch(`${API_URL}/path/${id}`).then(response => response.json());
  };

export const createPath = path => {
  return fetch(`${API_URL}/path`, {
    method: 'POST',
    headers,
    body: JSON.stringify(path)
  }).then(response => response.json());
};

export const updatePath = (id, path) => {
  return fetch(`${API_URL}/path/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(path)
  }).then(response => response.json());
};

export const deletePath = id => {
  return fetch(`${API_URL}/path/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
};
