import { useState } from "react";
import { RiDashboardLine, RiTaskLine, RiCalendarLine, RiBarChartLine, RiTeamLine, RiSettingsLine, RiQuestionLine, RiLogoutBoxLine, RiSmartphoneLine } from "react-icons/ri";
import { Outlet } from "react-router";
import DBNavBar from "./DBNavBar";

const menuItems = [
  { label: "Dashboard", icon: <RiDashboardLine /> },
  { label: "Tasks", icon: <RiTaskLine />, badge: "12+" },
  { label: "Calendar", icon: <RiCalendarLine /> },
  { label: "Analytics", icon: <RiBarChartLine /> },
  { label: "Team", icon: <RiTeamLine /> },
];

const generalItems = [
  { label: "Settings", icon: <RiSettingsLine /> },
  { label: "Help", icon: <RiQuestionLine /> },
  { label: "Logout", icon: <RiLogoutBoxLine /> },
];

export default function SidebarNavbar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-52 bg-white flex flex-col justify-between py-6 px-4 shadow-sm shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-8 px-1">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
              {/* simple leaf icon via svg */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 3-11 8a4 4 0 00-.8 2.5c2.3-3.4 7.23-4.5 10.8-4.5z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-800">Donezo</span>
          </div>

          {/* Menu */}
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-2 px-1">Menu</p>
          <ul className="space-y-0.5">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActive(item.label)}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${
                    active === item.label
                      ? "bg-green-700 text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <span className="text-base shrink-0">{item.icon}</span>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                        active === item.label
                          ? "bg-green-600 text-green-100"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* General */}
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mt-6 mb-2 px-1">General</p>
          <ul className="space-y-0.5">
            {generalItems.map((item) => (
              <li key={item.label}>
                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-all duration-150">
                  <span className="text-base shrink-0">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Card */}
        <div className="bg-green-900 rounded-2xl p-4 text-white text-center">
          <div className="flex justify-center mb-2">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
              <RiSmartphoneLine className="text-white text-base" />
            </div>
          </div>
          <p className="text-xs font-semibold leading-snug">Download our Mobile App</p>
          <p className="text-[10px] text-green-400 mt-0.5 mb-3">Get easy in anytime</p>
          <button className="w-full py-1.5 rounded-full bg-green-500 hover:bg-green-400 transition text-white text-xs font-semibold">
            Download
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <DBNavBar></DBNavBar>

        <div className="flex-1 p-6  text-black">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}