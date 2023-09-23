import React from 'react';
import Bannar from '../../Cmponents/Header/Bannar/Bannar';
import Phones from '../../Cmponents/Phones/Phones';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (

        <div>
            <Bannar></Bannar>
            <Phones></Phones>
        </div>
    );
};

export default Home;