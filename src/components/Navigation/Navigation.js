import { Link, /*useLocation*/ } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

export const Navigation = ({ onLogout }) => {

    // const location = useLocation();

    const navigate = useNavigate();
    
 
    const handleLogout = () => {
        onLogout();
        navigate('/login');
    }

    return (
        <>
        <img className='logo' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1600,h_900,strp/random_logo_by_criticl_d7eqdvw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU' alt='logo'></img>
        <div>
            {/* {location.pathname !== '/register' && <Link to="/register">Register</Link> } */}
        </div>
        <div className='navigation'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/home">Home</Link>
            <Link to="/add">Add</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </>
        
    )
}



// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const navigationStyle = {
//     display: 'flex',
//     gap: 10,
//     justifyContent: 'center',
//     padding: 20
// }

// export const Navigation = ({ onLogout }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         onLogout();
//         navigate('/login');
//     }

//     return (
//         <div style={navigationStyle}>
//             {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
//             <Link to="/">Home</Link>
//             <Link to="/contacts">Contacts</Link>
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     )
// }