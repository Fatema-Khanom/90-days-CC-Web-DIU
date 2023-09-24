import React from 'react';
import PhonesCard from './PhonesCard';

const Phones = ({phones}) => {
    return (
        <div>
            <h1 className='text-2xl text-center py-10'>All Categories Phone</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    phones.map (phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
        </div>
    );
};

export default Phones;