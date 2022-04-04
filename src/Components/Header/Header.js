import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='main-container' >
            <header className='container p-2'>
            <div className='d-flex justify-content-between align-items-center'> 
                <div className='BrandName '>
                    <h2>Drone Shop</h2>

                </div>

                <div className='nav '>
                <NavLink to="/"className={({ isActive }) => ( isActive ? "active-link" : "link")} >Home</NavLink>  
                <NavLink to="reviews"className={({ isActive }) => ( isActive ? "active-link" : "link")}>Reviews</NavLink>
                <NavLink to='dashboard'className={({ isActive }) => ( isActive ? "active-link" : "link")}>Dashboard</NavLink>
                <NavLink to='blogs'className={({ isActive }) => ( isActive ? "active-link" : "link")} >Blogs</NavLink>
                <NavLink to='about'className={({ isActive }) => ( isActive ? "active-link" : "link")}>About</NavLink>
                </div>
            </div>
           
            </header>
            
        </div>
    );
};

export default Header;