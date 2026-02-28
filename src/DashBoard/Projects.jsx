import React, { useEffect, useState } from 'react';
import { FiPlus } from "react-icons/fi";
import UseAxios from '../Hooks/UseAxios';

const Projects = () => {
    const [projectData, setProjectData] = useState([])
    const axiosSecure = UseAxios()
    
    useEffect(()=>{
        axiosSecure.get('/api/products')
        .then(res => {
            console.log(res.data)
            setProjectData(res.data)
        })
    },[])
    return (
        <div>
            <div className="card bg-white  w-full p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-black text-xl">Project Price</h2>
        <button className="btn border-2 border-[#14532d] rounded-full gap-1 bg-white text-[#14532d] font-medium">
          <FiPlus size={14} />
          New
        </button>
      </div>
      <ul className="space-y-3">
        {projectData.map((project) => (
          <li
            key={project.id}
            className="flex items-center gap-3 cursor-pointer rounded-xl px-2 py-2 transition-colors"
          >
            <div>
              
              <p className="text-lg font-semibold text-gray-800  leading-tight">
                {project.name}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
               Category: {project.category}  
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Price: ${project.price} & Sales: {project.sales}
              </p>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
};

export default Projects;