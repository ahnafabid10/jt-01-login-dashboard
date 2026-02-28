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
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white text-sm px-4 sm:px-6 py-2 rounded-full transition-colors">
            <HiPlus className="text-lg" />
            Add Project
          </button>
          <button className="border-2 border-green-900 text-green-900 hover:bg-green-900 hover:text-white text-sm px-4 sm:px-6 py-2 rounded-full transition-colors">
            Import Data
          </button>
        </div>
      </div>
      <ProjectCards />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="md:col-span-2 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="sm:col-span-2 xl:col-span-2">
            <Analysis />
          </div>
          <div className="sm:col-span-1 xl:col-span-1">
            <ReminderCard />
          </div>
          <div className="sm:col-span-2 xl:col-span-2">
            <Team />
          </div>

          <div className="sm:col-span-1 xl:col-span-1">
            <ProjectProcess />
          </div>
        </div>
        <div className="md:col-span-2 xl:col-span-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5">
          <Projects />
          <TimeTracker />
        </div>
      </div>

    </div>
  );
};

export default DashBoard;