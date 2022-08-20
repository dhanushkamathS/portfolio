import React from 'react';
import {Images} from '../constants/index'

const ProjectCard = ({name,detail,stack,githubUrl,imageUrl}) => {

    console.log(stack)
    return(
        <div className='bg-blue-300 w-60 h-65 sm:w-80 sm:h-80'>
            <div className='bg-[#112240] flex flex-1 flex-col w-full h-full p-5'>
                <div className=' w-full flex justify-between h-min'>
                    <Icon link={githubUrl} image={Images.github2}/>
                    {/* <img className='w-12 h-12'  src={}/> */}
                    {/* <img className='w-10 h-12'  src={dis}/> */}
                </div>
                <div className='mt-4  h-2/3'>
                    <p className=' text-sm sm:text-base md:text-lg text-white'>{name}</p>
                    <p className='text-sm sm:text-base text-[#ccd6f6] pb-2'>{detail}</p>

                </div>
                <div>
                    <div className='flex flex-row text-base space-x-3'>
                        {stack.map((skill)=>(
                            <p className=' text-slate-50'>{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Icon = ({link,image}) =>{
   
    return(
        <div className ="icon">
            <a href={link} className="w-64 h-64 rounded-xl bg-transparent m-0">
            <img className=' w-10 h-10 sm:w-12 sm:h-12'  src={image}/>
            </a>
        </div>
    )
}

export default ProjectCard;