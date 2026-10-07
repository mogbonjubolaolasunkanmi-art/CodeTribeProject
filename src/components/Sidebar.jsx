import { Link } from "react-router-dom";
import logo from "../assets/codetribe-logo.jpg";

function Sidebar() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;
  return (
    <aside className="hidden w-64 border-r border-gray-100 bg-white p-6 md:block">
      {/* Logo */}
      <div className="mb-10 flex items-center ">
        <img
          src={logo}
          alt="CodeTribe"
          className="w-40 h-auto object-contain"
        />
        {/* <h2 className="text-xl font-bold text-gray-800">
          CodeTribe
        </h2> */}
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        <div className="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-600">
          <Link to="/">🏠 Dashboards</Link>
        </div>

        <div
          className="px-4 py-3 text-gray-600 className="
          flex
          cursor-pointer
          items-center
          gap-3
          rounded-lg
          px-4
          py-3
          transition-all
          duration-200
          hover:bg-green-50
          hover:text-green-600
        >
          <Link to="/MyHabits"> ☷ My Habits</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/Calender">📅 Calendar</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/Progress">📊 Progress</Link>
        </div>

        <div className="px-4 py-3 text-gray-600">
          <Link to="/Settings">⚙️ Settings</Link>
        </div>
      </nav>

      {/* Bottom */}
      <div className="mt-75 px-4 text-sm text-gray-400">⚙ Help & Support</div>
    </aside>
  );
}

export default Sidebar;
