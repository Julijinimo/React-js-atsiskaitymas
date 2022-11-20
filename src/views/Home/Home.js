import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/constants';
import './home.css';

const Home = () => {

    const [getError, setGetError] = useState('');
    const [posts, setPosts] = useState([]);
    const [getMessage, setGetMessage] = useState('');

             useEffect(() => {
                const token = localStorage.getItem("token");
            
                fetch(BASE_URL + '/content/skills', {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                })
                .then(res => res.json())
                .then(data => {
                console.log(data);
                if (data.err) {
                setGetError(data.err);
                } else {
                setPosts(posts)
                setGetMessage(data.response)
                }})})
    

            return (
                <>
                    {getError && <h2 className='erroras'>Error: {getError}</h2>}
                    
                    <div>
                        <h1 className='home' >Welcome to React atsiskaitymas!</h1>
                    </div>
                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                    {getMessage ? <h3>These are your added skills</h3> : ''}
                </>    
            )
        };            

//     return (
//         <>
//             {retrievalError && <h2 className='erroras'>Error: {retrievalError}</h2>}
            
//             <div>
//             <h1 className='home' >Welcome to React atsiskaitymas!</h1>
//             </div>
            
//             <input onChange={handleInputChange} />
//                 {posts.map((post) => (
//             <div>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             </div>
//         ))}
//         </>    
//     )
// };

export default Home;