import { useState } from 'react';
import { BASE_URL } from '../../utils/constants'

const Add = ({ onAdd }) => {
    const [email, setEmail] = useState('');
    const [registerError, setRegisterError] = useState('');


    const handleRegister = (e) => {
      e.preventDefault();
        onAdd(email);
      fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email, 
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


    return (
        <>
        {registerError && <h2>Error: {registerError}</h2>}
        <h1>
            Add Page
        </h1>
        <form onSubmit={handleRegister}>
            <label>Input text</label> <br></br>
            <input type="text" placeholder='Text area' onChange={handleEmailChange}/>
            <button type='submit' >Add</button>
        </form>
        </>
        
    )
};

export default Add