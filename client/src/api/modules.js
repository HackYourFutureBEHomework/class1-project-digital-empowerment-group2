// import Cookies from 'universal-cookie';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

// const cookies = new Cookies();

const headers = new Headers({
  'Content-Type': 'application/json',
  // 'Accept': 'application/json',
  // 'Access-Control-Allow-Origin': window.location.origin,
  //  Authorization: `Bearer ${cookies.get('auth')}`
});


export const getModules = () => fetch(`${API_URL}/module`).then(response => response.json());

export const createModule = (pathId, module) => {
  const {title, explanation,exercise,evaluation} = module;
      return fetch(`${API_URL}/path/${pathId}/module`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ title, explanation, exercise,evaluation })
      }).then(response => response.json());
};
    
export const updateModule = (module) => {
  const {title, explanation,exercise,evaluation} = module;
  return fetch(`${API_URL}/module/${module._id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ title, explanation, exercise, evaluation})
  }).then(response => response.json())
};

export const deleteModule = id => {fetch(`${API_URL}/module/${id}`, { method: 'DELETE', headers }).then(response => response.json());};


// export const resetModule = (id, completed) => {
//   return fetch(`${API_URL}/module/${id}`, {
//     method: 'PUT',
//     headers: headers,
//     body: JSON.stringify({
//       completed: completed
//     })
//   }).then(response => response.json());
// };

