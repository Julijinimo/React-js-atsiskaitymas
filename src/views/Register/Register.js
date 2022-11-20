import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BASE_URL } from '../../utils/constants'
// import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [registrationSuccessful, setRegistrationMessage] = useState('');
    


    // const navigate = useNavigate();

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


// // const [registerError, setRegisterError] = useState('');

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     fetch(`${BASE_URL}/auth/register`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-type': 'application/json'
// //       },
// //       body: JSON.stringify({
// //         email: 'test123@gmail.com', // cia reikes padaryti kad imtu info is inputo
// //         password: 'test123' // cia reikes padaryti, kad imtu info is inputo
// //       })
// //     })
// // }

// // return (
// //     <div>
// //         <Navigation>
            
// //         </Navigation>
// //         {registerError && <h3>{registerError}</h3>}
// //         <form onSubmit={handleLogin}>
// //         <input type="email" placeholder='Email'/>
// //         <input type="password" placeholder='Password'/>
// //         <button type='submit' >Register</button>
// //         </form>
// //     </div>
    
// // )
// }

