const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',

});

export const getPaths = () => 
  fetch(`${API_URL}/path`)
  .then(response => 
    response.json()
    );

export const createModule = ( path) => {
  const {title, module} = path;
      return fetch(`${API_URL}/path`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ 
          title:title,
          module:module})
      }).then(response => response.json());
    };
    

// export const updateModule = (path) => {
//   const {title, explanation,exercise,evaluation} =  module;

//   return fetch(`${API_URL}/module/${module._id}`, {
//     method: 'PATCH',
//     headers,
//     body: JSON.stringify({
//       title, 
//       explanation, 
//       exercise, 
//       evaluation
//     })
//   }).then(response => response.json())
// };

// export const deleteModule = id => {
//   fetch(`${API_URL}/module/${id}`, { 
//     method: 'DELETE',
//     headers 
//    }).then(response => response.json());
//   };





