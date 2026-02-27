import React from 'react';
import { BsCameraVideoFill } from "react-icons/bs";

const ReminderCard = () => {
    return (
        <div>
            <div className="card bg-white shadow-md w-72 p-4 rounded-2xl">
      <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">
        Reminders
      </p>

      <div className="flex items-start gap-3">
        <div className="w-1 rounded-full bg-success self-stretch" />

        <div>
          <h2 className="font-bold text-green-900 leading-tight">
            Meeting with Arc Company
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Time : 02:00 pm - 04:00 pm
          </p>
        </div>
      </div>

      <button className="btn btn-success mt-4 w-full rounded-xl text-white gap-2">
        <BsCameraVideoFill size={16} />
        Start Meeting
      </button>
    </div>
        </div>
    );
};

export default ReminderCard;