import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiTrendingUp, FiMessageCircle } from "react-icons/fi";
import UseAxios from '../Hooks/UseAxios';

const ProjectCards = () => {
  const [selected, setSelected] = useState(1);
  const [cardData, setCardData] = useState({});
  const axiosSecure = UseAxios();

  useEffect(() => {
    axiosSecure.get('/api/overview').then(res => {
      setCardData(res.data);
    });
  }, []);

  const cards = [
    {
      id: 1,
      title: "Total Users",
      value: cardData.totalUsers,
      sub: "Increased from last month",
      subIcon: "trend",
    },
    {
      id: 2,
      title: "Active Users",
      value: cardData.activeUsers,
      sub: "Increased from last month",
      subIcon: "trend",
    },
    {
      id: 3,
      title: "Revenue",
      value: `$${cardData.revenue}`,
      sub: "Increased from last month",
      subIcon: "trend",
    },
    {
      id: 4,
      title: "Growth",
      value: `${cardData.growth}%`,
      sub: "On Discuss",
      subIcon: "chat",
    },
  ];

  return (
    <div className="py-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const isSelected = selected === card.id;
          return (
            <div
              key={card.id}
              onClick={() => setSelected(card.id)}
              className={`
                relative cursor-pointer rounded-2xl p-5 w-full flex flex-col justify-between
                transition-all duration-300 select-none min-h-[150px]
                ${isSelected
                  ? "bg-green-700 text-white shadow-lg shadow-green-200"
                  : "bg-white text-gray-800 shadow-sm hover:shadow-md"
                }
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-lg font-bold leading-tight ${isSelected ? "text-green-100" : "text-black"}`}>
                  {card.title}
                </span>
                <span className={`flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-300 shrink-0 ${isSelected ? "bg-green-600 text-white" : "bg-gray-100 text-gray-400"}`}>
                  <FiArrowUpRight size={14} />
                </span>
              </div>
              <div className={`text-3xl sm:text-4xl font-bold mb-4 ${isSelected ? "text-white" : "text-gray-800"}`}>
                {card.value}
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${isSelected ? "bg-green-600 text-white" : "bg-green-100 text-green-600"}`}>
                  {card.subIcon === "trend" ? <FiTrendingUp size={10} /> : <FiMessageCircle size={10} />}
                </span>
                <span className={`text-xs ${isSelected ? "text-green-100" : "text-gray-400"}`}>
                  {card.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCards;