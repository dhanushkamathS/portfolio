import React from 'react';
import {Images} from '../constants/index'


const InfoCard = () =>{
    return(
        <div className='sm:w-1/2 md:w-1/3'>
           <div className='flex flex-col items-center'>
               <img src={Images.profilepic} className=" w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-transparent m-0 border-cyan-300 border-4"/>
                <p className=' text-cyan-300 sm:text-2xl md:text-4xl mt-5 mb-0'>dhanush kamath</p>
               <p className="text-white sm:text-base md:text-3xl mb-3 mt-3">student, developer ,gamer</p>
               <p className="text-white sm:text-base md:text-3xl mb-3 mt-3">backend, frontend, react native</p>
           </div>
           <div className='flex flex-row  space-x-3 sm:space-x-5 md:space-x-11 justify-center'>
                 <Icon link="https://github.com/dhanushkamathS" image={Images.github}/>
                 <Icon link="https://www.instagram.com/dhanush_kamaths/" image={Images.instagram}/>
                 <Icon link="https://www.linkedin.com/in/dhanush-kamath/" image={Images.linkedin}/>
                 <Icon link="mailto: dhanushkamath@gmail.com" image={Images.gmail}/>
           </div>
        </div>
    )
}


const Icon = ({link,image}) =>{
   
    return(
        <div className ="icon">
            <a href={link} className="w-64 h-64 rounded-xl bg-transparent m-0">
            <img className='w-10 h-10 sm:w-12 sm:h-12'  src={image}/>
            </a>
        </div>
    )
}

export default InfoCard;