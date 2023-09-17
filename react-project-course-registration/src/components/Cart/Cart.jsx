

const Cart = ({selectedCourse,totalHour,remaining}) => {
    return (
        <div className=" w-10/12 m-auto lg:w-[250px] p-[10px] bg-white shadow-lg rounded-lg">
            <h1 className="text-blue-400 font-semibold ">Credit Hour Remaining {remaining} hr</h1>
            <hr className="my-4" /> 
            <h1 className="font-bold text-lg" >Course Name</h1>
            
            {selectedCourse.map((course, index) => (
            <ol  key={index}>{index + 1}.{course.title}</ol>
            ))}
             <hr className="my-4" /> 
            <h1>Total Credit Houre: {totalHour}</h1>
           
        </div>
    );
};

export default Cart;