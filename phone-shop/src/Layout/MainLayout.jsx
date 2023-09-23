import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Cmponents/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='w-10/12 m-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;