import React, { useState } from 'react';
import { RiBellLine, RiMailLine, RiSearchLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

const DBNavBar = ({ onMenuClick }) => {
  const [searchOpen, setSearchOpen] = useState(false);
   const user = JSON.parse(localStorage.getItem("user"));
 

  return (
    <header className="bg-white px-4 sm:px-6 py-3 flex items-center gap-3 shadow-sm shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition shrink-0"
        aria-label="Open menu"
      >
        <RiMenuLine className="text-xl" />
      </button>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-48 md:w-64">
          <RiSearchLine className="text-gray-400 shrink-0" />
          <input
            className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
            placeholder="Search task"
          />
          <span className="text-[10px] text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded font-mono shrink-0">⌘ k</span>
        </div>
        <div className="sm:hidden flex items-center">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-40">
              <RiSearchLine className="text-gray-400 shrink-0" />
              <input
                autoFocus
                className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
                placeholder="Search…"
              />
              <button onClick={() => setSearchOpen(false)}>
                <RiCloseLine className="text-gray-400 text-lg" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition"
            >
              <RiSearchLine className="text-xl" />
            </button>
          )}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
          <RiMailLine className="text-xl" />
        </button>

        <div className="relative">
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition">
            <RiBellLine className="text-xl" />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1 hidden sm:block" />
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-orange-400 flex items-center justify-center text-white text-sm font-bold shrink-0 ring-2 ring-orange-200">
            TM
          </div>
          <div className="hidden md:block leading-tight">
            <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition">
              Michael Modushudhon
            </p>
            <p className="text-[11px] text-gray-400">{user?.email ?? 'user@example.com'}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DBNavBar;