import React from 'react';
import { BsCameraVideoFill } from "react-icons/bs";

const ReminderCard = () => {
    return (
        <div>
            <div className="card bg-white shadow-md p-4 rounded-2xl">
      <p className="text-lg font-bold text-black uppercase tracking-widest mb-12">
        Reminders
      </p>

      <div className="flex items-start gap-3">
        

        <div>
          <h2 className="font-bold text-4xl text-green-900 leading-tight mb-4">
            Meeting with Arc Company
          </h2>
          <p className="text-xm text-gray-500 mb-2">
            Time : 02:00 pm - 04:00 pm
          </p>
        </div>
      </div>

      <button className="btn bg-[#14532d] mt-4 w-full rounded-xl text-white gap-2">
        <BsCameraVideoFill size={16} />
        Start Meeting
      </button>
    </div>
        </div>
    );
};

export default ReminderCard;