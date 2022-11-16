import React from 'react';
import { BASE_URL } from './Utils/constants';

import './App.css';


function App() {
  const [registerError, setRegisterError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: 'test123@gmail.com',
        password: 'test123'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.err) {
        setRegisterError(data.err);
      } else {
        localStorage.setItem("token", data.token) // login komponente


        //kodas zemiau rasysi i home komponenta
        localStorage.getItem("token") // sita naudosiu kai noresiu gauti skills, einant per fecth

        fetch(BASE_URL + "/content/skills", {
          headers: {
            Authorization: "Bearer" + token
          }
        })
      }
    });
  }

  return (
    <div className="App">
      {registerError && <h3>{registerError}</h3>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
