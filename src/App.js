import Navbar from "./components/Navbar";
import { Partical } from "./components/Partical";
import InfoCard from "./components/infocard";
import {Images,AboutMe,PersonalDetail} from './constants/index'
import ProjectCard from "./components/ProjectCard";

const skillList = [
  "docker",
  "git",
  "node",
  "postgres",
  "react",
  "redux",
  "vscode",
  "python",
  "java",
  "cpp"
]

const App = () => {

    return(
      <div className=" flex flex-1 bg-black h-screen flex-col">
        <Navbar/>
        <div className=" bg-pink-700">
        <Partical/>
        </div>  
        <div className="w-full h-full">
          <div className="flex justify-center pt-32  h-screen">
            <InfoCard/>
          </div>
        </div>


        <div className=" mb-24">
          <div id="aboutme" className="sm:2xl md:text-5xl text-white flex  sm:justify-center md:justify-start md:ml-60 mb-4 ">
            About Me
            </div>
            <div className="flex justify-center">
              <div  className="flex justify-center flex-col  space-y-3 text-white sm:text-base md:text-2xl w-3/4">{
              AboutMe.map((sen)=>(
                <p className="text-white sm:text-base md:text-2xl">{sen}</p>
              ))
              }</div>
            </div>
        </div>

       
       <div className="mt-24">
          <div className="sm:2xl  md:text-5xl  text-white flex  sm:justify-center md:justify-start md:ml-60 mb-4 ">
            My skills
            </div>
                     

            <div className="flex justify-center">
                <div className=" grid gap-x-6 gap-y-4 sm:gap-x-36 sm:gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 justify-items-center ">
              {
                skillList.map((skill)=>{return(
                  <img className="w-16 h-16 sm:w-24 sm:h-24 p-1 hover:bg-sky-900" src={Images[skill]} style={{border:'1px solid #2E77BB', borderRadius:'5px'}}/>
                )})
              }
            </div>
            </div>
       </div>

       <div className=" mt-36">
            <div id="projects" className="sm:2xl  md:text-5xl  text-white flex  sm:justify-center md:justify-start md:ml-60 mb-4 ">
              My Projects
            </div>
            
            <div className="flex justify-center ">
              <div className="grid gap-x-6 gap-y-4 sm:gap-x-36 sm:gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-4/5  ">
                {PersonalDetail.map((card)=>{
                  return(
                      <ProjectCard name={card.name} detail={card.discription} githubUrl={card.githubUrl} imageUrl={card.imageUrl} stack={card.stack}/>
                  )
                })}
              </div>
            </div>
       </div>

         <div className="flex justify-center flex-row m-4 h-1/6 mb-8">
          <ul className=" grid  gap-6 grid-flow-col">
            <li><a className="text-white underline text-sm sm:text-lg md:text-2xl" href="https://www.linkedin.com/in/dhanush-kamath/">Linkedin</a></li>
            <li><a className="text-white underline text-sm sm:text-lg md:text-2xl" href="mailto: dhanushkamath@gmail.com">Email</a></li>
            <li><a className="text-white underline text-sm sm:text-lg md:text-2xl" href="https://www.instagram.com/dhanush_kamaths/">Instagram</a></li>
            <li><a className="text-white underline text-sm sm:text-lg md:text-2xl" href="https://github.com/dhanushkamathS">Github</a></li>
            <li><a className="text-white underline text-sm sm:text-lg md:text-2xl" href="https://discordapp.com/users/757238454735339551">Discord</a></li>
          </ul>
        </div>
        
        <div className=" h-12 ">
                bye
        </div>
        
      </div>
    )
    
};
export default App;
