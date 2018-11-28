const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',

});

export const getPath = () => 
  fetch(`${API_URL}/path`)
  .then(response => 
    response.json()
    );
export const getPath = (id) => 
fetch(`${API_URL}/path/${id}`)
.then(response => 
  response.json()
  );

export const createPath = ( title) => {
  const {title, module} = path;
      return fetch(`${API_URL}/path`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ 
          title})
      }).then(response => response.json());
    };
    

export const updatePath = (id,path) => {
  const {title, module} = path;

  return fetch(`${API_URL}/path/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(path)
  }).then(response => response.json())
};

export const deletePath = id => {
  fetch(`${API_URL}/path/${id}`, { 
    method: 'DELETE',
    headers 
   }).then(response => response.json());
  };





