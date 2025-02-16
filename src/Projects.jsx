import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import background from "/background.jpg"


const Projects = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:p-8 w-screen">
          <div className="text-center">
          <h2 className="text-white z-10 relative text-2xl font-bold font-Roboto mt-40">Projects</h2>
          </div>
          <div className="bg-white md:rounded-2xl relative">
          <div className="items-center">
            <Link
            to="/" 
            >
            <FontAwesomeIcon icon={faArrowLeft} className="text-black flex absolute ml-5 text-2xl mt-3" />
            </Link>
                  <div className="text-center flex justify-between md:ml-20 md:mr-20">
                    <h2 className= "flex font-bold md:text-2xl mt-10" style={{ color: '#3a2c4a' }}>Welcome,<p className="text-black font-normal">john</p></h2>
                    <h3 className="font-bold text-1xl mt-10">Central Dashboard</h3>
                  </div>
    
      </div>
      <div className="tex-center flex justify-center mt-20">
        <p className="md:p-20 pt-10 pb-10 pl-5 pr-5 md:mb-40 mb-20" 
        style={{
            border: '1px solid #3A2D4A'
        }}>Projects Catalog will be displayed here</p>
      </div>
      <div className="text-center">
        <button 
        type="submit"
        onClick={() => setIsOpen(true)}
        className="mb-10 w-40 h-10 rounded bg-black text-white" 
        style={{
            boxShadow: '4px 4px 4px 0px #3A2D4A40'

        }}>Save</button> 
        {isOpen && (
        <div className="fixed inset-0 grid justify-center bg-purple-700 bg-opacity-50">
          <img src={background} alt="50x50" className="h-130 absolute w-screen brightness-35" />
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg  p-8 shadow-lg relative">
          <FontAwesomeIcon icon={faCheck} className="text-center text-8xl text-white p-8" style={{
                           background: '#3A2D4A',
                           borderRadius: '50%'
                       }} />
            <p className="text-2xl font-semibold text-white">Department Created</p>
          </div>
        </div>
      )}
      </div>
    </div>
    </div>
  );
};
export default Projects;
