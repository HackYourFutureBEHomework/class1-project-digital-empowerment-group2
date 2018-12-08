

const API_URL = 'http://localhost:4000';

const headers = new Headers({
  'Content-Type': 'application/json',
  
});


//export const getUsers = () => fetch(`${API_URL}/user`).then(response => response.json());

// export const userRegister = async (user) => {
//   const {name, email,password } = user;
//       const response = await fetch(`${API_URL}/register`, {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({ name, email,password})
//       })
//      // const user = await response.json();
//       return response.json();
// };
    
export const userLogIn = async (email,password) => {
 //const { email,password} = user;
  return  fetch(`${API_URL}/login `, {
    method: 'POST',
    headers,
    body: JSON.stringify({  
      email,password
    })
  })
  .then(res => {
    if (res.status === 200){
      return res.json();
    } else {
      const error = new error(res.error);
      throw error; 
    }
  })
  .catch(err => {
    //console.error = error(res.error);
    alert('your are not logged in ')
  })
  // const {token}  = await response.json();
  // document.cookie = `token = $ {token}`;
  // console.log(token)
 
// this.props.setLoggedInState()
};

//export const deleteUser = id => {fetch(`${API_URL}/user/${id}`, { method: 'DELETE', headers }).then(response => response.json());};

