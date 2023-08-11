import './Nav.scss';

import home from '../../assets/home.svg';
import home2 from '../../assets/bag.svg';
import home4 from '../../assets/Nav-Link.png'; 
import group from '../../assets/Group.svg';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className='nav'>
            <ul>
                <NavLink to='/store/'>
                    <li><img src={group} alt="" /></li>
                </NavLink>

                

                <NavLink to='/store/'>
                    <li className='nav-link'><img src={home} alt="" /></li>
                </NavLink>
                
                
                <NavLink to='/store/bag'>
                    <li><img src={home2} alt="" /></li>
                </NavLink>
            </ul>

            <img src={home4} alt="" />
        </nav>
    );
}