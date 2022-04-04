import './Header.css'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div className=' container bg-primary text-white' >
            <div className='p-3 mb-2 bg-primary text-white
            '>
            <div className='d-flex ext-white'> 
                <div className='BrandName bg-primary text-white'>
                    <h2>Drone Shop</h2>

                </div>
                <div className='nav'>
                <NavLink to="/"className={({ isActive }) => ( isActive ? "active-link" : "link")} >Home</NavLink>  
                <NavLink to="reviews"className={({ isActive }) => ( isActive ? "active-link" : "link")}>Reviews</NavLink>
                <NavLink to='dashboard'className={({ isActive }) => ( isActive ? "active-link" : "link")}>Dashboard</NavLink>
                <NavLink to='blogs'className={({ isActive }) => ( isActive ? "active-link" : "link")} >Blogs</NavLink>
                <NavLink to='about'className={({ isActive }) => ( isActive ? "active-link" : "link")}>About</NavLink>
                </div>
            </div>
           
            </div>
            
        </div>
    );
};

export default Header;