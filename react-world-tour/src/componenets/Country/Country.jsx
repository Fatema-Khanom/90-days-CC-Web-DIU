import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population,area, cca3}=country
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    return (
        <div className='country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Popultion:{population}</h4>
            <h5>Area:{area}</h5>
            <p>Code: {cca3}</p>
            <button onClick ={handleVisited}>{visited? 'Visited':'Going'}</button>
            {
                visited? 'i have vidited this country.': 'I want to visit'
            }
        </div>
    );
};

export default Country;
