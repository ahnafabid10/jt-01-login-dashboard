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
            <div className="card bg-base-100 shadow-md w-72 p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-base-content text-base">Project</h2>
        <button className="btn btn-sm btn-ghost border border-base-300 rounded-full gap-1 text-xs font-medium">
          <FiPlus size={14} />
          New
        </button>
      </div>
      <ul className="space-y-3">
        {projectData.map((project) => (
          <li
            key={project.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-base-200 rounded-xl px-2 py-1 transition-colors"
          >
            <div>
              
              <p className="text-sm font-semibold text-base-content leading-tight">
                {project.name}
              </p>
              <p className="text-xs text-base-content/40 mt-0.5">
               Category: {project.category}  
              </p>
              <p className="text-xs text-base-content/40 mt-0.5">
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