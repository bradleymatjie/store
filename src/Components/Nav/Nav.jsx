import './Nav.scss';

import home from '../../assets/home.svg';
import home2 from '../../assets/bag.svg';
import home4 from '../../assets/Nav-Link.png'; 
import group from '../../assets/Group.svg';
import { NavLink } from 'react-router-dom';

export const Nav = ({ menuTogglerFunction, menuTogglerValue }) => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                <NavLink to='/store/'>
                <img src={group} alt="" />
                </NavLink>
                </li>

                <li>
                    <div 
                        className={`toggle ${menuTogglerValue ? "active" : ""}`}
                        onClick={() => {
                            menuTogglerFunction((state) => (!state))
                        }}
                        >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </li>
                
                <li className='nav-link'>
                    <NavLink to='/store/'>
                        <img src={home} alt="" />
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to='/store/bag'>
                        <img src={home2} alt="" />
                    </NavLink>
                </li>
            </ul>

            <img src={home4} alt="" />
        </nav>
    );
}