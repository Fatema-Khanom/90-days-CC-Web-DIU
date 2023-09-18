
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features}= option
    return (
        <div className='bg-blue-500 rounded-md p-6 text-white m-6 flex flex-col'>
            <h2 className='text-center'>
                <span className="text-5xl font-bold">{price}</span>
                
            </h2>
            <h4 className="text-2xl text-center">{name}</h4>
           <div className="pl-6 flex-grow">
           {
                features.map((feature , index)=> <Feature key={index} feature={feature} ></Feature>)
            }
           </div>

            <button className='bg-blue-700 mt-6 w-full p-2 rounded font-bold hover:bg-green-600'>Buy Now </button>
        </div>
        
    );
};
PriceOption.propTypes={
    option:PropTypes.object
}

export default PriceOption;