import React from 'react';
import { RiBellLine, RiMailLine, RiSearchLine } from 'react-icons/ri';

const DBNavBar = () => {
        const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            
        <header className="bg-white px-6 py-3 flex items-center gap-4 shadow-sm shrink-0">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-64">
            <RiSearchLine className="text-gray-400 shrink-0" />
            <input
              className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
              placeholder="Search task"
            />
            <span className="text-[10px] text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded font-mono shrink-0">⌘ k</span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {/* Mail */}
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
              <RiMailLine className="text-xl" />
            </button>

            <div className="relative">
              <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
                <RiBellLine className="text-xl" />
              </button>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>

            <div className="w-px h-6 bg-gray-200 mx-1" />

            <div className="flex items-center gap-2.5 cursor-pointer group">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-orange-400 flex items-center justify-center text-white text-sm font-bold shrink-0 ring-2 ring-orange-200">
                TM
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition">Michael Modushudhon</p>
                <p className="text-[11px] text-gray-400">{user?.email}</p>
              </div>
            </div>
          </div>
        </header>
        </div>
    );
};

export default DBNavBar;