const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',
});

export const getPaths = () => fetch (API_URL).then (res => res.json())

export const getPath = (id) => fetch (`${API_URL}/${id}`).then (res => res.json())

export const createPath= body  => (
    fetch(API_URL,{
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }).then(res=>res.json())
)