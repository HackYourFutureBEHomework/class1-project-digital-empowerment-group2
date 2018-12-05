// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
const BASE_URL = `${API_URL}/logins`;

const headers = new Headers({
  'Content-Type': 'application/json'
});

export const login = (email, password) => (
  fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  }).then(response => response.json())
);