import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BASE_URL } from '../../utils/constants'

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [registrationSuccessful, setRegistrationMessage] = useState('');
    

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
        console.log(data);
        if (data.err) {
          setRegisterError(data.err);
        } else {
          setRegistrationMessage(data.lastID)
        }})}

        const handleEmailChange = (e) => setEmail(e.target.value);
        const handlePasswordChange = (e) => setPassword(e.target.value);


    return (
        <>
        <Navigation />
        {registerError && <h2 className='Error'>Error: {registerError}!</h2>}
        <h1>
            Register Page
        </h1>
        <form onSubmit={handleRegister}>
            <input type="email" placeholder='Email' onChange={handleEmailChange}/>
            <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
            <button type='submit' >Register</button>
        </form>
        {registrationSuccessful ? <h3>Registration successful, please proceed to login page!</h3> : ''}
        </>
        
    )
};

export default Register
