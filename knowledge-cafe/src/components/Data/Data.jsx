import React, { useEffect, useState } from 'react';

const Data = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl '>Blogs</h1>
        </div>
    );
};

export default Data;