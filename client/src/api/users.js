// const config = require('../../config');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// const User = require('../model/user.model');
// const VerifyToken = require('./VerifyToken');

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',
  // Accept: "application/json",
  // "Access-Control-Allow-Origin": window.location.origin
});


//export const getUsers = () => fetch(`${API_URL}/user`).then(response => response.json());

export const userRegister = async (user) => {
  const {name, email,password } = user;
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ name, email,password})
      })
      return response.json();
};
    
export const userLogIn = async (user) => {
  const {name, email,password} = user;
  const response = await  fetch(`${API_URL}/login `, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email,password})
  });
  return response.json();
};

//export const deleteUser = id => {fetch(`${API_URL}/user/${id}`, { method: 'DELETE', headers }).then(response => response.json());};

