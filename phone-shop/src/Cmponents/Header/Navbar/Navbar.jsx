import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between p-7 shadow-md rounded-md '>
                <Logo></Logo>
                <ul className='flex gap-5'>
                    <li>
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 underline " : ""
                        }
                        >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/favourite"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-blue-600 underline " : ""
                        }
                        >
                        Favourite
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-600 underline " : ""
                        }
                        >
                        Login
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;