import { useState } from "react";
import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
import "./MyHabits.css";
import codetribe from "../../assets/codetribe-logo.jpg";
import {
  Bell,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  ChevronDown,
  ChevronRight,
  CircleUser,
  House,
  Settings,
  SquareMenu,
} from "lucide-react";
const habits = [
  {
    icon: "💧",
    iconClass: "blue",
    name: "Drink 8 glasses of water",
    frequency: "Daily • 8 glasses",
    streak: "12 day streak",
    streakClass: "green",
  },
  {
    icon: "🏋️",
    iconClass: "purple",
    name: "Exercise for 30 minutes",
    frequency: "Mon, Wed, Fri • 30 min",
    streak: "8 day streak",
    streakClass: "yellow",
  },
  {
    icon: "📖",
    iconClass: "yellow",
    name: "Read for 20 minutes",
    frequency: "Daily • 20 min",
    streak: "5 day streak",
    streakClass: "yellow",
  },
  {
    icon: "🧘",
    iconClass: "pink",
    name: "Meditate",
    frequency: "Daily • 15 min",
    streak: "3 day streak",
    streakClass: "yellow",
  },
  {
    icon: "🍴",
    iconClass: "green",
    name: "Eat healthy meals",
    frequency: "Daily • 3 meals",
    streak: "10 day streak",
    streakClass: "yellow",
  },
  {
    icon: "📝",
    iconClass: "lightBlue",
    name: "Journal",
    frequency: "Daily • 10 min",
    streak: "4 day streak",
    streakClass: "yellow",
  },
];

const MyHabits = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1">
        {/* <Header /> */}
        <div className="p-8">
          <div className="page-heading">
            <h1>My Habits</h1>
            <button className="add-habit-btn">
              <span>＋</span>
              Add habit
            </button>
          </div>
          <div className="p-text">
            <p> Manage and organize all your habits.</p>
          </div>
          <div className="tabs">
            <button className="tab-one">
              Active Habits <span>(6)</span>
            </button>
            <button className="tab">
              Archived <span>(2)</span>
            </button>
          </div>
          <div className="habit-list">
            {habits.map((habit, index) => (
              <div className="habit-card" key={index}>
                <div className={`habit-icon ${habit.iconClass}`}>
                  {habit.icon}
                </div>
                <div className="habit-info">
                  <h3>{habit.name}</h3>
                  <p>{habit.frequency}</p>
                </div>
                <div className={`streak ${habit.streakClass}`}>
                  {habit.streak}
                </div>
                <button className="habit-arrow">
                  <ChevronRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default MyHabits;
