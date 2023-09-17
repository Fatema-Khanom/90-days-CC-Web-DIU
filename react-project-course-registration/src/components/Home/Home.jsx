import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import swal from 'sweetalert';

const Home = () => {
  const [allCourse,setAllCourse]=useState([])
  const [selectedCourse,setSelectedCourse]=useState([])
  const [remaining,setRemaining]=useState(20)
  const [totalHour,setTotalHour]=useState(0)
  useEffect(()=>{
    fetch("./block.json")
    .then((res)=>res.json())
    .then((data)=>setAllCourse(data))
  },[])
  const handleSelectCourse=(course)=>{
    const isExist=selectedCourse.find((item)=>
      item.id==course.id
    )
    let count =course.credit
    if(isExist){
      swal("Oops!", "This course already enrolled!", "error");
    }
    else{
      selectedCourse.forEach((item)=>{
        count+=item.credit
      })
      const totalRemaining=20-count
      
      if(count>20){
        swal("Oops!", "Credit hour already finished!", "error");
      }
      else{
        setTotalHour(count)
        setRemaining(totalRemaining)
        setSelectedCourse([...selectedCourse,course])
      }
    }
   
  }
   
    return (
        <div className="w-10/12 m-auto pb-16">
      <div className=" lg:flex justify-evenly gap-6">
        <div className=" w-10/12 m-auto mb-6 grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
          
            {
              allCourse.map((course)=>(
                <div key={course.id}  className="w-[250px] h-[330px] bg-white shadow-lg rounded-lg ">
              <div className="card-img">
                <img className="p-[8px] " src={course.cover} alt="" />
              </div>
             <div className="p-2 m-2">
             <h2 className="text-[16px] font-bold ">{course.title}</h2>
              <p>
                <small className="">
                  {course.description}
                </small>
              </p>
              <div className="flex gap-[4px] ">
                <img src="./public/images/dollar-sign 1.png" alt="" />
                <p className="font-semibold">Price: {course.price}</p>
                <img src="./public/images/Frame.png" alt="" />
                <p className="font-semibold">Credit: {course.credit}</p>
              </div>
              <button onClick={()=>handleSelectCourse(course)} className="bg-blue-600 rounded mt-4 w-[100%] p-[4px]">Select</button>
             </div>
              
            </div>
              ))}
        
        </div>
        <div className=" ">
          <Cart selectedCourse={selectedCourse} remaining={remaining} totalHour={totalHour}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;