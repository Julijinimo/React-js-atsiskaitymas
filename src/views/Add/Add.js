import { useState } from 'react';
import { BASE_URL } from '../../utils/constants'

const Add = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');


    const handleRegister = (e) => {
      e.preventDefault();
        onRegister(email);
        onRegister(password);
      fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email, 
          password: password,
        })
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.err) {
          setRegisterError(data.err);
        } else {
 
        }})}

        const handleEmailChange = (e) => setEmail(e.target.value);
        const handlePasswordChange = (e) => setPassword(e.target.value);


    return (
        <>
        {registerError && <h2>Error: {registerError}</h2>}
        <h1>
            Add Page
        </h1>
        <form onSubmit={handleRegister}>
            <input type="email" placeholder='Email' onChange={handleEmailChange}/>
            <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
            <button type='submit' >Add</button>
        </form>
        </>
        
    )
};

export default Add