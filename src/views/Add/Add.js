import { useState } from 'react';
import { BASE_URL } from '../../utils/constants'
import './add.css';

const Add = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [addError, setAddError] = useState('');
    const [addSuccess, setAddSuccess] = useState('');
    const token = localStorage.getItem("token");


    const handleAdd = (e) => {
      e.preventDefault();
      fetch(BASE_URL + '/content/skills', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
            title: title,
            description: description,
        }
        )
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.err) {
          setAddError(data.err);
        } else {
          setAddSuccess(data.msg);
        }})}

        const handleTitleChange = (e) => setTitle(e.target.value);
        const handleDescriptionChange = (e) => setDescription(e.target.value);


    return (
        <>
        {addError && <h2 className='Error'>Error: {addError}</h2>}
        {addSuccess && <h2>Success: {addSuccess}!</h2>}
        <h1>
            Add Page
        </h1>
        <form onSubmit={handleAdd}>
            <label>Input text</label> <br></br>
            <input type="text" placeholder='Title' onChange={handleTitleChange}/>
            <input type="text" placeholder='Description' onChange={handleDescriptionChange}/>
            <button type='submit'>Add</button>
        </form>
        </>
        
    )
};

export default Add