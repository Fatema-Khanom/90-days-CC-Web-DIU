import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from "../Link/Link";
import { useState } from 'react';


const Navbar = () => {
    const [open,setOpen]=useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
      ];
      
    return (
        <nav className='text-black bg-blue-300 p-6'> 
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open===true? <AiOutlineClose className='text-4xl '></AiOutlineClose>
                    :<AiOutlineMenu className='text-4xl '></AiOutlineMenu>
                }
                </div>
            <ul className={`md:flex absolute md:static duration-1000
             ${open?'top-20 ':'-top-64'} bg-blue-500 font-bold text-white p-2`}>
                {
          routes.map (route => <Link  key={route.id} route={route}></Link> )

                }
            </ul>
        </nav>
    );
};

export default Navbar;