import { useState } from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import { BASE_URL } from '../../utils/constants'
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerError, setRegisterError] = useState('');

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
          setRegisterError(data.err);
        } else {
          localStorage.setItem("token", data.token);
          navigate('/home');
        }})}

        const handleEmailChange = (e) => setEmail(e.target.value);
        const handlePasswordChange = (e) => setPassword(e.target.value);


    return (
        <>
        <Navigation />
        {registerError && <h2 className='erroras'>Error: {registerError}</h2>}
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


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Navigation } from '../../components/Navigation/Navigation';

// const Login = ({ onLogin }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin(email);
//         onLogin(password);
//         navigate('/');
//     }


//     const handleEmailChange = (e) => setEmail(e.target.value);
//     const handlePasswordChange = (e) => setPassword(e.target.value);



//     return (
//         <>
//         <Navigation />
//         <h1>Login Page</h1>
//         <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="Email" onChange={handleEmailChange} />
//             <input type="password" placeholder='Password' onChange={handlePasswordChange}/>
//             <button>Login</button>
//         </form>
//         </>
        
//     );

// };



// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Login = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin(username);

//         // fetch('/login', {
//         //     method: 'POST',
//         //     body: JSON.stringify({

//         //     })
//         // })
//         // .then((res) => res.json())
//         // .then((data) => {
//         //     onLogin(data);
//         // })
//         // .catch(())

//         navigate('/');
//     };
//     const handleUsernameChange = (e) => setUsername(e.target.value);

//     return (
//         <div>
//             <h1>Login page</h1>
//             <form onSubmit={handleSubmit}>
//                 <input placeholder="Username" onChange={handleUsernameChange} />
//                 <input type="password" placeholder="Password" />
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// };

// export default Login;