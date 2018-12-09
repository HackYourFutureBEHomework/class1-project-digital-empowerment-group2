

const API_URL = 'http://localhost:4000';

const headers = {
  'Content-Type': 'application/json',
};

export const login =  (email, password) =>{
    console.log(email,password)
     return  fetch(`${API_URL}/login`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(res => {
        if (res.status === 200) {
         return res.json() ;
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      })
      
    
}