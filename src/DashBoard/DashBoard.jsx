import React from 'react';
import { HiPlus } from 'react-icons/hi';
import ProjectCards from './ProjectCards';
import Analysis from './Analysis';
import ReminderCard from './ReminderCard';
import Projects from './Projects';
import Team from './Team';
import ProjectProcess from './ProjectProcess';
import TimeTracker from './TimeTraker';

const DashBoard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-black">Dashboard</h1>
          <p className="mt-1 text-gray-600">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-full">
            <HiPlus className="text-xl" />
            Add Project
          </button>
          <button className="border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white px-6 py-2 rounded-full">
            Import Data
          </button>
        </div>
      </div>

      <ProjectCards />

<div className="grid grid-cols-4 gap-5">
  <div className="col-span-3 grid grid-cols-3 gap-5">
    <div className="col-span-2">
      <Analysis />
    </div>
    <div className="col-span-1">
      <ReminderCard />
    </div>
    <div className="col-span-2">
      <Team />
    </div>
    <div className="col-span-1">
      <ProjectProcess />
    </div>
  </div>
  <div className="col-span-1 grid grid-cols-1 gap-5">
    <Projects />
    <TimeTracker />
  </div>
</div>

    </div>
  );
};

export default DashBoard;