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

          <Route path='/home' element={
            <RouteSuspense>
              <Home />
            </RouteSuspense>
          } />

        </Route>

         <Route path='/login' element={
            <RouteSuspense>
              <Login onLogin={handleLogin} />
            </RouteSuspense>
          } />


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
