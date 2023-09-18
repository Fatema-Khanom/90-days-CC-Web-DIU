import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions =[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Free fitness assessment",
            "10% discount on personal training",
            "Limited access to group fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": "$49.99/month",
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Sauna and steam room access",
            "Personalized workout plans",
            "15% discount on personal training",
            "Unlimited access to group fitness classes"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": "$79.99/month",
          "features": [
            "All features of Silver Membership",
            "Unlimited tanning sessions",
            "Complimentary towel service",
            "Nutrition consultation",
            "20% discount on personal training",
            "Priority access to group fitness classes"
          ]
        }
      ]
      
    return (
        <div className="m-12"> 
            <h2 className="text-4xl text-center">Best price in the town</h2>
            <div className="md:grid  grid-cols-3 gap-6 ">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option} ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;