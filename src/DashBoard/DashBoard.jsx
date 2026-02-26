import React from 'react';
import { HiPlus } from 'react-icons/hi';

const DashBoard = () => {
    return (
        <div>
           <div className="flex flex-col md:flex-row md:items-center rounded-2xl justify-between gap-4 p-6 bg-gray-200">
      <div>
        <h1 className="text-4xl font-bold text-black">Dashboard</h1>
        <p className="mt-1 text-medium text-gray-600/70">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      <div className="flex items-center gap-3">  
        <button className="btn btn-md border-none bg-[#14532d] hover:bg-[#166534] text-white rounded-full px-6 normal-case">
          <HiPlus className="text-xl" />
          Add Project
        </button>
        <button className="btn btn-md text-[#14532d] btn-outline border-[#14532d] border-2 hover:hover:bg-[#166534] hover:text-white rounded-full px-6 normal-case font-medium">
          Import Data
        </button>
      </div>
    </div>
        </div>
    );
};

export default DashBoard;