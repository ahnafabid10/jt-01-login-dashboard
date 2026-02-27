import React, { useEffect, useState } from 'react';
import { FiPlus, FiGithub, FiLock, FiSearch, FiLayout } from "react-icons/fi";
import UseAxios from '../Hooks/UseAxios';

const Team = () => {
    const [userData, setUserData] = useState([])
    const axiosSecure = UseAxios()

    useEffect(()=>{
        axiosSecure.get('/api/users')
        .then(res => {
            console.log(res.data)
            setUserData(res.data)
        })
    },[])
    
    return (
        <div>
    <div className="flex">
      <div
        className="card bg-base-100 shadow-xl w-full max-w-md"
        style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
      >
        <div className="card-body p-6 gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-base-content">
              Team Collaboration
            </h2>
            <button className="btn btn-sm btn-outline gap-1 rounded-full border-base-300 text-sm font-medium hover:bg-primary hover:text-primary-content hover:border-primary transition-all duration-200">
              <FiPlus className="text-base" />
              Add Member
            </button>
          </div>

          <ul className="flex flex-col gap-3">
            {userData.map((member) => (
              <li
                key={member.id}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-200 cursor-pointer  hover:bg-base-200 bg-transparent`}
              >

                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-1 overflow-hidden">
                    <FiGithub className="w-full h-full object-cover"/>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-base-content leading-tight truncate">
                    {member.name}
                  </p>
                  <p className="text-xs text-base-content/50 truncate flex items-center gap-1 mt-0.5">
                    {member.email}
                  </p>
                  <p className="text-xs text-base-content/50 truncate flex items-center gap-1 mt-0.5">
                    Join Date: {member.joinDate}
                  </p>
                </div>

                <span
                  className={`badge badge-sm ${member.status === "active" ? "badge badge-soft badge-success" : "badge badge-soft badge-warning"} font-medium whitespace-nowrap`}
                >
                  {member.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Team;