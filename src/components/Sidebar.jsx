// import { Link } from "react-router-dom";
// import logo from "../assets/codetribe-logo.jpg";

// function Sidebar() {
//   const savedUser = localStorage.getItem("user");
//   const user = savedUser ? JSON.parse(savedUser) : null;
//   return (
//     <aside className="hidden w-64 border-r border-gray-100 bg-white p-6 md:block">
//       {/* Logo */}
//       <div className="mb-10 flex items-center ">
//         <img
//           src={logo}
//           alt="CodeTribe"
//           className="w-40 h-auto object-contain"
//         />
//         {/* <h2 className="text-xl font-bold text-gray-800">
//           CodeTribe
//         </h2> */}
//       </div>

//       {/* Navigation */}
//       <nav className="space-y-3">
//         <div className="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-600">
//           <Link to="/">🏠 Dashboards</Link>
//         </div>

//         <div
//           className="px-4 py-3 text-gray-600 className="
//           flex
//           cursor-pointer
//           items-center
//           gap-3
//           rounded-lg
//           px-4
//           py-3
//           transition-all
//           duration-200
//           hover:bg-green-50
//           hover:text-green-600
//         >
//           <Link to="/MyHabits"> ☷ My Habits</Link>
//         </div>

//         <div className="px-4 py-3 text-gray-600">
//           <Link to="/Calender">📅 Calendar</Link>
//         </div>

//         <div className="px-4 py-3 text-gray-600">
//           <Link to="/Progress">📊 Progress</Link>
//         </div>

//         <div className="px-4 py-3 text-gray-600">
//           <Link to="/Settings">⚙️ Settings</Link>
//         </div>
//       </nav>

//       {/* Bottom */}
//       <div className="mt-75 px-4 text-sm text-gray-400">⚙ Help & Support</div>
//     </aside>
//   );
// }

// export default Sidebar;
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/codetribe-logo.jpg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  return (
    <>
      {/* ================= MOBILE HAMBURGER ================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 top-4 z-50 rounded-lg border border-gray-200 bg-white p-2 text-emerald-600 shadow-sm md:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64 border-r border-gray-100
          bg-white p-6 transition-transform duration-300
          md:static md:block md:h-auto md:min-h-screen md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 md:hidden"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="mb-10 flex items-center">
          <img
            src={logo}
            alt="CodeTribe"
            className="h-auto w-40 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          {/* Dashboard */}
          <div className="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-600">
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              🏠 Dashboard
            </Link>
          </div>

          {/* My Habits */}
          <div className="flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600">
            <Link to="/MyHabits" onClick={() => setIsOpen(false)}>
              ☷ My Habits
            </Link>
          </div>

          {/* Calendar */}
          <div className="px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600">
            <Link to="/Calender" onClick={() => setIsOpen(false)}>
              📅 Calendar
            </Link>
          </div>

          {/* Progress */}
          <div className="px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600">
            <Link to="/Progress" onClick={() => setIsOpen(false)}>
              📊 Progress
            </Link>
          </div>

          {/* Settings */}
          <div className="px-4 py-3 text-gray-600 transition-all duration-200 hover:bg-green-50 hover:text-green-600">
            <Link to="/Settings" onClick={() => setIsOpen(false)}>
              ⚙️ Settings
            </Link>
          </div>
        </nav>

        {/* Bottom */}
        <div className="mt-75 px-4 text-sm text-gray-400">⚙ Help & Support</div>

        {/* User Information */}
        <div className="mt-6 border-t border-gray-100 pt-4">
          <p className="font-semibold text-gray-800">{user?.name || "User"}</p>

          <p className="break-all text-sm text-gray-400">
            {user?.email || "user@email.com"}
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
