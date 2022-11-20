import { useState } from 'react';
import { BASE_URL } from '../../utils/constants'

const Add = ({ onAdd }) => {
    const [token, setAdd] = useState('');
    const [addError, setAddError] = useState('');
    const token = localStorage.getItem("token");


    const handleAdd = (e) => {
      e.preventDefault();
        // onAdd(token);
      fetch(BASE_URL + '/auth/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          token: token, 
        })
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.err) {
          setAddError(data.err);
        } else {
 
        }})}

        const handleTextChange = (e) => setAdd(e.target.value);


    return (
        <>
        {addError && <h2>Error: {addError}</h2>}
        <h1>
            Add Page
        </h1>
        <form onSubmit={handleAdd}>
            <label>Input text</label> <br></br>
            <input type="text" placeholder='Text area' onChange={handleTextChange}/>
            <button type='submit' >Add</button>
        </form>
        </>
        
    )
};

export default Add