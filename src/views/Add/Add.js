import { useState } from 'react';
import { BASE_URL } from '../../utils/constants'

const Add = ({ onAdd }) => {
    const [add, setAdd] = useState([]);
    const [addError, setAddError] = useState('');
    const token = localStorage.getItem("token");


    const handleAdd = (e) => {
      e.preventDefault();
      fetch(BASE_URL + '/content/skills', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(
          [add],
        )
      })
      .then(res => res.json())
      .then(data => {
        // console.log(Authorization);
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