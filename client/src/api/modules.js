const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json'
});

export const getModules = () => 
  fetch(`${API_URL}/module`)
  .then(response => 
    response.json()
    );
    export const createModule = ( title, explanation,exercise,evaluation) => {
      return fetch(`${API_URL}/module`, {
        method: 'POST',
        headers,
        body: JSON.stringify({title:title,explanation:explanation,exercise:exercise,evaluation:evaluation})
      }).then(response => response.json());
    };
    
export const updateModule = ( id, title, explanation, exercise, evaluation) => {
  return fetch(`${API_URL}/module/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({title:title,explanation:explanation,exercise:exercise,evaluation:evaluation})
  }).then(response => response.json());
};

export const deleteModule = id => 
  fetch(`${API_URL}/module/${id}`, { 
    method: 'DELETE', 
    headers 
  });






