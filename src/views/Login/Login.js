import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);

        // fetch('/login', {
        //     method: 'POST',
        //     body: JSON.stringify({

        //     })
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     onLogin(data);
        // })
        // .catch(())

        navigate('/');
    };
    const handleUsernameChange = (e) => setUsername(e.target.value);

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Username" onChange={handleUsernameChange} />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    )
};

export default LoginPage;