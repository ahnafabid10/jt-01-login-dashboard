import React from 'react';
import { FiPause, FiSquare } from 'react-icons/fi';

const TimeTracker = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden p-4 flex flex-col gap-2 w-48 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #1a3a2a 0%, #0d2118 40%, #162e20 100%)',
      }}
    >
      <p className="text-xs font-medium text-green-300 opacity-75">
        Time Tracker
      </p>
      <p
        className="text-white font-bold"
        style={{ fontSize: '1.8rem', fontFamily: 'monospace', letterSpacing: '-0.02em' }}
      >
        01:24:08
      </p>

      <div className="flex gap-2 mt-1">
        <button
          className="flex items-center justify-center rounded-full w-9 h-9 text-white"
          style={{ background: 'rgba(255,255,255,0.18)' }}
        >
          <FiPause size={15} />
        </button>
        <button
          className="flex items-center justify-center rounded-full w-9 h-9 text-white"
          style={{ background: 'rgba(220, 50, 50, 0.75)' }}
        >
          <FiSquare size={15} />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;