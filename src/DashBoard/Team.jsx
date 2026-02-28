import React, { useEffect, useState } from 'react';
import { FiPlus, FiGithub } from "react-icons/fi";
import UseAxios from '../Hooks/UseAxios';

const Team = () => {
  const [userData, setUserData] = useState([]);
  const axiosSecure = UseAxios();

  useEffect(() => {
    axiosSecure.get('/api/users').then(res => {
      setUserData(res.data.slice(0, 3));
    });
  }, []);

  return (
    <div className="bg-white w-full rounded-2xl p-4 sm:p-5" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-black">
          Team Collaboration
        </h2>
        <button className="flex items-center gap-1 border-2 border-[#14532d] text-[#14532d] bg-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full hover:bg-green-50 transition-all duration-200 shrink-0">
          <FiPlus className="text-base" />
          <span className="hidden xs:inline sm:inline">Add Member</span>
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {userData.map((member) => (
          <li
            key={member.id}
            className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all duration-200"
          >

            <div className="w-10 h-10 rounded-full ring-2 ring-gray-200 flex items-center justify-center bg-gray-100 shrink-0">
              <FiGithub className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-black leading-tight truncate">
                {member.name}
              </p>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {member.email}
              </p>
            </div>
            <span
              className={`shrink-0 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                member.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {member.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;