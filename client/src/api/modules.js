const API_URL = 'http://localhost:4000';

const headers = {
  'Content-Type': 'application/json'
};

export const getModules = () => fetch(`${API_URL}/module`).then(response => response.json());

export const createModule = (title) => {
  return fetch(`${API_URL}/module`, {
    method: 'POST',
    headers: headers, // this is where we set the headers
    body: JSON.stringify({ title: title })
  }).then(response => response.json());
};





export const updateModule = (module) => {
  
  return fetch(`${API_URL}/module/${module._id}`, {
    method: 'patch',
    headers, 
    
    body: JSON.stringify( module)

  }).then(response => response.json());
};


export const deleteModule = (id) => {
  console.log(id)
  return fetch(`${API_URL}/module/${id}`, {
    method: 'DELETE'
  }).then(response => response.json());
};


