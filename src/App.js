import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout/PageLayout';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';

import './App.css';

const Login = React.lazy(() => import('./views/Login/Login'));
const Register = React.lazy(() => import('./views/Register/Register'));
const Home = React.lazy(() => import('./views/Home/Home'));
const Add = React.lazy(() => import('./views/Add/Add'));


function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = (email, password) => {
    setEmail({ email: email });
    setPassword({ password: password })
  };
  const handleLogout = () => {
    setEmail(null);
    setPassword(null)
  };
  const handleRegister = (email, password) => {
    setEmail({ email: email });
    setPassword({ password: password })
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PageLayout email={email} password={password} onLogout={handleLogout} /> }>
          <Route index element={
            <RouteSuspense>
              <Home />
            </RouteSuspense>
          } />
          <Route path='/add' element={
            <RouteSuspense>
              <Add />
            </RouteSuspense>
          } />
        </Route>
        <Route>
          <Route path='/login' element={
            <RouteSuspense>
              <Login onLogin={handleLogin} />
            </RouteSuspense>
          } />
        </Route>
        <Route>
          <Route path='/register' element={
            <RouteSuspense>
              <Register onRegister={handleRegister}/>
            </RouteSuspense>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
// import { PageLayout } from './components/PageLayout/PageLayout';
// // import { Route } from './components/Route/Route';
// // import HomePage from './views/HomePage/HomePage';
// // import ContactsPage from './views/ContactsPage/ContactsPage';
// // import AboutPage from './views/AboutPage/AboutPage';

// import './App.css';

// const HomePage = React.lazy(() => import('./views/Home/Home'));
// const ContactsPage = React.lazy(() => import('./views/Add/Add'));
// const AboutPage = React.lazy(() => import('./views/Login/Login'));
// const LoginPage = React.lazy(() => import('./views/Register/Register'));

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = (username) => setUser({ username });

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<PageLayout user={user} />}>
//           <Route index element={
//             <RouteSuspense>
//               <Home />
//             </RouteSuspense>
//           } />
//           <Route path="/add" element={
//             <RouteSuspense>
//               <Add />
//             </RouteSuspense>
//           } />
//           <Route path="/about" element={
//             <RouteSuspense>
//               <AboutPage />
//             </RouteSuspense>
//           } />
//         </Route>
//         <Route path="/login" element={
//           <RouteSuspense>
//             <LoginPage onLogin={handleLogin} />
//           </RouteSuspense>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';
// import { BASE_URL } from './utils/constants';
// import { Register } from './Views/Register/Register.js'

// import './App.css';


// function App() {
//   return (
//     <Register />
//   )
  

// //   const [registerError, setRegisterError] = useState('');

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
// //     .then(res => res.json())
// //     .then(data => {
// //       console.log(data);
// //       if (data.err) {
// //         setRegisterError(data.err);
// //       } else {
// //         localStorage.setItem("token", data.token) // login komponente


// //         //kodas zemiau rasysi i home komponenta
// //         localStorage.getItem("token") // sita naudosiu kai noresiu gauti skills, einant per fecth

// //         fetch(BASE_URL + "/content/skills", {
// //           headers: {
// //             Authorization: "Bearer " + token
// //           }
// //         })
// //       }
// //     });
// //   }

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");

// //     fetch(`${BASE_URL}/content/skills`, {
// //       headers: {
// //         Authorization: 'Bearer ' + token
// //       }
// //     })
// //     .then(res = res.json())
// //     .then(data => {
// //       console.log(data)
// //     }) 
// //   }, []);

// //   return (
// //     <div className="App">
// //       <Register />
// //       {/* {registerError && <h3>{registerError}</h3>}
// //       <form onSubmit={handleLogin}>
// //         <input type="email" placeholder='Email'/>
// //         <input type="password" placeholder='Password'/>
// //         <button>Register</button>
// //       </form> */}
// //     </div>
// //   );
// }

// export default App;
