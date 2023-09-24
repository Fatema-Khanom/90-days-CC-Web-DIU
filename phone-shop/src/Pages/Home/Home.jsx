import React from 'react';
import Bannar from '../../Cmponents/Header/Bannar/Bannar';
import Phones from '../../Cmponents/Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    
    return (

        <div>
            <Bannar></Bannar>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;