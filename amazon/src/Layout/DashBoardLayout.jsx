import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
    return (
        <div className='flex'>
           
           <div className="w-[20%] p-6  shadow-lg">
            <ul>
                <li><Link to = '/dashboard'>Dashboard</Link></li>
                <li><Link to = '/dashboard/profile'>Profile</Link></li>
                <li><Link to = '/dashboard/editProfile'>EditProfile</Link></li>
            </ul>
           </div>
           <div className=" w-[80%]">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoardLayout;

 