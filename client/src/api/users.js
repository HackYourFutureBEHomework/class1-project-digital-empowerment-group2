export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';


const headers = new Headers({
  'Content-Type': 'application/json'
});

export const login = (email, password) => ( 
  fetch(`${API_URL}/user/login`, { 
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  }).then(response => response.json())
);console.log(`${API_URL}/user/login`)
