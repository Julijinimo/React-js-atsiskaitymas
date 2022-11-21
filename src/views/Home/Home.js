import { useEffect, useState } from 'react';
import { BASE_URL } from '../../utils/constants';
// import { InfinitySpin } from 'react-loader-spinner';
import './home.css';

const Home = () => {

    const [getError, setGetError] = useState('');
    const [posts, setPosts] = useState([]);



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
                setPosts(data);
            if (data.err) {
                setGetError(data.err);
            } else {
                
            }
        }
        )
    }, []);
    

    return (
        <div className='home-wrapper'>
            <h1 className='home' >Here you can find your added skills</h1>
            <>
                {getError && <h2 className='Error'>Error: {getError}</h2>}
                <div className='posts-wrapper'>
                    {posts.map(data => 
                    <>
                        <div className='post' key={Math.random}>
                            <h2>Skill: {data.title}</h2> 
                            <p>Skill description: {data.description}</p>
                        </div>
                    </>
                    )}
                </div>
            </> 
        </div>
            
               
    )
};            

export default Home;