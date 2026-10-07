// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import StatCard from "../components/StatCard";
import HabitItem from "../components/HabitItem";
import Motivation from "../components/Motivation";

import {
  ArrowLeft,
  Bell,
  ChevronDown,
  Check,
  Dumbbell,
  Flame,
  Trophy,
  CircleCheck,
  Pencil,
  Archive,
} from "lucide-react";

const habits = [
  {
    icon: "💧",
    title: "Drink 8 glasses of water",
    time: "8:00 AM",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "🏋️",
    title: "Exercise for 20 minutes",
    time: "7:00 AM",
    frequency: "Mon, Wed, Fri",
    completed: true,
  },
  {
    icon: "📖",
    title: "Read for 20 minutes",
    time: "8:00 PM",
    frequency: "Daily",
    completed: false,
  },
  {
    icon: "🧘",
    title: "Meditate",
    time: "7:00 AM",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "🍴",
    title: "Eat healthy meals",
    time: "All day",
    frequency: "Daily",
    completed: true,
  },
  {
    icon: "📝",
    title: "Journal",
    time: "9:00 PM",
    frequency: "Daily",
    completed: false,
  },
];

function Calender() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1">
        {/* <Header /> */}
        <div className="px-5 py-6 sm:px-8">
          {/* Back */}
          <button className="mb-7 flex items-center gap-2 text-sm font-medium text-gray-600">
            <ArrowLeft className="h-4 w-4" />
            Back to My Habits
          </button>

          {/* ================= HABIT TITLE ================= */}
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              {/* Habit Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Dumbbell className="h-8 w-8 text-purple-600" />
              </div>

              <div>
                <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                  Exercise for 30 minutes
                </h1>

                <p className="mt-1 text-sm text-gray-400">
                  Fitness • 30 minutes • Mon, Wed, Fri
                </p>
              </div>
            </div>

            {/* Streak */}
            <div className="flex w-fit items-center gap-2 rounded-full bg-green-50 px-4 py-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                <Flame className="h-3.5 w-3.5 text-green-600" />
              </div>

              <span className="text-sm font-semibold text-green-600">
                8 day streak
              </span>
            </div>
          </section>

          {/* ================= THIS WEEK ================= */}
          <section className="mt-7 rounded-xl border border-gray-100 p-5 shadow-sm">
            <h2 className="text-lg font-bold text-gray-800">This Week</h2>

            <div className="mt-7 grid grid-cols-7 gap-2">
              {/* Monday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Mon</span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Tue</span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Wed</span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Thursday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Thu</span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Friday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Fri</span>
                <div
                  onClick={() => setCompleted(!completed)}
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full ${
                    completed ? "bg-green-500" : "border-2 border-gray-200"
                  }`}
                >
                  {completed && <Check className="h-5 w-5 text-white" />}
                </div>
              </div>

              {/* Saturday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Sat</span>

                <div className="h-9 w-9 rounded-full border-2 border-gray-200" />
              </div>

              {/* Sunday */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-gray-500">Sun</span>

                <div className="h-9 w-9 rounded-full border-2 border-gray-200" />
              </div>
            </div>
          </section>

          {/* ================= PROGRESS ================= */}
          <section className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">Progress</h2>

              <span className="text-sm font-semibold text-gray-600">67%</span>
            </div>

            <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[67%] rounded-full bg-green-500" />
            </div>
          </section>

          {/* ================= STAT CARDS ================= */}
          <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Current Streak */}
            <div className="rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
                  <Flame className="h-5 w-5 text-orange-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Current Streak</p>

                  <p className="mt-1 text-xl font-bold text-green-600">
                    8 days
                  </p>
                </div>
              </div>
            </div>

            {/* Best Streak */}
            <div className="rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-50">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Best Streak</p>

                  <p className="mt-1 text-xl font-bold text-green-600">
                    28 days
                  </p>
                </div>
              </div>
            </div>

            {/* Total Completions */}
            <div className="rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50">
                  <CircleCheck className="h-5 w-5 text-green-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">Total Completions</p>

                  <p className="mt-1 text-xl font-bold text-green-600">
                    24 times
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= HISTORY ================= */}
          <section className="mt-7 rounded-xl border border-gray-100 p-5">
            <h2 className="text-lg font-bold text-gray-800">History</h2>

            {/* April */}
            <div className="mt-6 flex items-center gap-5">
              <span className="w-20 text-sm text-gray-500">April 2025</span>

              <div className="flex flex-1 items-center gap-2 overflow-hidden">
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />

                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
              </div>

              <span className="text-gray-400">›</span>
            </div>

            {/* March */}
            <div className="mt-5 flex items-center gap-5 border-t border-gray-100 pt-5">
              <span className="w-20 text-sm text-gray-500">March 2025</span>

              <div className="flex flex-1 items-center gap-2 overflow-hidden">
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />

                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
              </div>

              <span className="text-gray-400">›</span>
            </div>

            {/* February */}
            <div className="mt-5 flex items-center gap-5 border-t border-gray-100 pt-5">
              <span className="w-20 text-sm text-gray-500">February 2025</span>

              <div className="flex flex-1 items-center gap-2 overflow-hidden">
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-green-500" />

                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
              </div>

              <span className="text-gray-400">›</span>
            </div>
          </section>

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-3 text-sm font-medium text-gray-600">
              <Pencil className="h-4 w-4" />
              Edit Habit
            </button>

            <button className="flex items-center justify-center gap-2 rounded-lg border border-red-100 py-3 text-sm font-medium text-red-500">
              <Archive className="h-4 w-4" />
              Archive Habit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Calender;
