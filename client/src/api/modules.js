const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',
  // 'Accept': 'application/json',
  // 'Access-Control-Allow-Origin': window.location.origin
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
        body: JSON.stringify({ 
          title:title,
          explanation:explanation,
          exercise:exercise,
          evaluation:evaluation})
      }).then(response => response.json());
    };
    

export const updateModule = (module, explanation, exercise, evaluation) => (
  fetch(`${API_URL}/module/${module._id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      module:module,
      explanation:explanation,
      exercise:exercise,
      evaluation:evaluation})
  }).then(response => response.json())
);

export const deleteModule = id => {
  fetch(`${API_URL}/module/${id}`, { 
    method: 'DELETE',
    headers 
   }).then(response => response.json());
  };



  // export const completedModule = (id, completed) => {
  //   return fetch(`${API_URL}/module/${id}`, {
  //     method: 'PUT',
  //     headers: headers,
  //     body: JSON.stringify({
  //       completed: completed
  //     })
  //   }).then(response => response.json());
  // };

