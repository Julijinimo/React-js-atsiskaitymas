import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
import { PageLayout } from './components/PageLayout/PageLayout';
// import { Route } from './components/Route/Route';
// import HomePage from './views/HomePage/HomePage';
// import ContactsPage from './views/ContactsPage/ContactsPage';
// import AboutPage from './views/AboutPage/AboutPage';

import './App.css';

const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./views/ContactsPage/ContactsPage'));
const AboutPage = React.lazy(() => import('./views/AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser({ username });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} />}>
          <Route index element={
            <RouteSuspense>
              <HomePage />
            </RouteSuspense>
          } />
          <Route path="/contacts" element={
            <RouteSuspense>
              <ContactsPage />
            </RouteSuspense>
          } />
          <Route path="/about" element={
            <RouteSuspense>
              <AboutPage />
            </RouteSuspense>
          } />
        </Route>
        <Route path="/login" element={
          <RouteSuspense>
            <LoginPage onLogin={handleLogin} />
          </RouteSuspense>
        } />
      </Routes>
    </div>
  );
}

export default App;

// // import { BASE_URL } from './Utils/constants';
// import { Navigation } from './Components/Navigation';


// export const Register = () => {
//     return (
//     <>
//         <Navigation />
//         <form>
//             <input type="email" placeholder='Email'/>
//             <input type="password" placeholder='Password'/>
//             <button type='submit' >Register</button>
//         </form>
//     </>
        
//     )


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

