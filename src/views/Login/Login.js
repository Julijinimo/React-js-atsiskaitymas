import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BASE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
        onLogin(email);
        onLogin(password);
      fetch(BASE_URL + '/auth/login', {
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
          setLoginError(data.err);
        } else {
          localStorage.setItem("token", data.token);
          navigate('/home');
        }})}

        const handleEmailChange = (e) => setEmail(e.target.value);
        const handlePasswordChange = (e) => setPassword(e.target.value);


    return (
        <>
        <Navigation />
          {loginError && <h2 className='Error'>Error: {loginError}!</h2>}
        <h1>
            Login Page
        </h1>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder='Email' onChange={handleEmailChange}/>
            <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
            <button type='submit' >Login</button>
        </form>
        </>
        
    )
};

export default Login;
