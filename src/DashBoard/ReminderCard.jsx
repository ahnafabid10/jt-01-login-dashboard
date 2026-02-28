import React from 'react';
import { BsCameraVideoFill } from "react-icons/bs";

const ReminderCard = () => {
  return (
    <div className="bg-white shadow-md p-4 sm:p-5 rounded-2xl w-full">
      <p className="text-lg font-bold text-black tracking-widest mb-6 sm:mb-16">
        Reminders
      </p>

      <div className="flex items-start gap-3 mb-2">
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-green-900 leading-tight mb-3">
            Meeting with Arc Company
          </h2>
          <p className="text-sm text-gray-500">
            Time: 02:00 pm – 04:00 pm
          </p>
        </div>
      </div>

      <button className="mt-5 w-full flex items-center justify-center gap-2 bg-[#14532d] hover:bg-green-800 transition-colors text-white text-sm font-semibold py-2.5 px-4 rounded-xl">
        <BsCameraVideoFill size={16} />
        Start Meeting
      </button>
    </div>
  );
};

export default ReminderCard;