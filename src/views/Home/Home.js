// import { useEffect, useState } from 'react';
// import { BASE_URL } from '../../utils/constants';
import './home.css';

const Home = () => {

    // const [retrievalError, setRetrievalError] = useState('');
    // // const [posts, setPosts] = useState([]);

    //          useEffect(() => {
    //             const token = localStorage.getItem("token");
            
    //             fetch(BASE_URL + '/content/skills', {
    //             headers: {
    //                 'Content-type': 'application/json',
    //                 Authorization: 'Bearer ' + token
    //             },
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.err) {
    //                     setRetrievalError(data.err);
    //                 } else {
    //                     
                        
    //         }})})
    

    // const handleInputChange = (e) => {
    //     console.log(e.target.value);

    // }

    return (
        <>
        {/* {retrievalError && <h2 className='erroras'>Error: {retrievalError}</h2>} */}
        <div>
            <h1 className='home' >Welcome to React atsiskaitymas!</h1>
        </div>
        {/* <input onChange={handleInputChange} />
        {posts.map((post) => (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div> */}
        {/* ))} */}
        
        </>
        
    )
};

export default Home;