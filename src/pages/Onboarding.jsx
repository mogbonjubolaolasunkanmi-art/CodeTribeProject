// import { useState } from "react";
// import {
//   Heart,
//   Dumbbell,
//   ClipboardList,
//   BookOpen,
//   Brain,
//   Moon,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// function Onboarding() {
//   // Get the saved user from localStorage
//   const savedUser = localStorage.getItem("user");

//   // Convert the saved information back into an object
//   const user = savedUser ? JSON.parse(savedUser) : null;
//   const [customHabit, setCustomHabit] = useState("");
//   const [showInput, setShowInput] = useState(false);
//   const [customHabits, setCustomHabits] = useState([]);
//   return (
//     <div className="min-h-screen bg-[#f8faf9] px-4 py-8">
//       <div className="mx-auto min-h-[700px] max-w-4xl rounded-lg border border-gray-200 bg-white px-6 py-8">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             {/* Your logo can go here */}
//           </div>
//         </div>

//         {/* Heading */}
//         <div className="mx-auto mt-20 max-w-xl text-center">
//           {/* Welcome message */}
//           <h2 className="mb-4 text-lg font-medium text-green-600">
//             Welcome, {user?.name || "there"}! 👋
//           </h2>

//           <h1 className="text-2xl font-bold text-gray-800">
//             What do you want to improve?
//           </h1>

//           <p className="mt-3 text-sm text-gray-400">
//             Select the areas you'd like to focus on. You can choose more than
//             one.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
//           {/* Health */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
//               <Heart className="h-6 w-6 text-green-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Health</h3>
//               <p className="text-xs text-gray-400">
//                 Feel better, have more energy
//               </p>
//             </div>
//           </div>

//           {/* Fitness */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
//               <Dumbbell className="h-6 w-6 text-green-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Fitness</h3>
//               <p className="text-xs text-gray-400">Get stronger, stay active</p>
//             </div>
//           </div>

//           {/* Productivity */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
//               <ClipboardList className="h-6 w-6 text-yellow-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Productivity</h3>
//               <p className="text-xs text-gray-400">Get more done</p>
//             </div>
//           </div>

//           {/* Learning */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
//               <BookOpen className="h-6 w-6 text-orange-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Learning</h3>
//               <p className="text-xs text-gray-400">Build new skills</p>
//             </div>
//           </div>

//           {/* Mindfulness */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
//               <Brain className="h-6 w-6 text-purple-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Mindfulness</h3>
//               <p className="text-xs text-gray-400">Reduce stress, be present</p>
//             </div>
//           </div>

//           {/* Sleep */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
//               <Moon className="h-6 w-6 text-purple-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Sleep</h3>
//               <p className="text-xs text-gray-400">Better rest, better you</p>
//             </div>
//           </div>

//           {/* Personal */}
//           <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
//               <Sparkles className="h-6 w-6 text-purple-500" />
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-700">Personal</h3>
//               <p className="text-xs text-gray-400">
//                 Be the best version of yourself
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Next button */}
//         <div className="mx-auto mt-12 flex max-w-2xl justify-end">
//           <button className="flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-sm font-medium text-white">
//             Next
//             <ArrowRight className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//       {/* Create your own habit */}
//       <div className="mx-auto mt-4 max-w-2xl">
//         {!showInput ? (
//           <button
//             onClick={() => setShowInput(true)}
//             className="w-full rounded-xl border-2 border-dashed border-gray-300 p-4 text-sm font-medium text-gray-500 transition-all duration-200 hover:border-green-500 hover:bg-green-50 hover:text-green-600"
//           >
//             + Create your own habit
//           </button>
//         ) : (
//           <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
//             <input
//               type="text"
//               placeholder="e.g. Read 10 pages every day"
//               value={customHabit}
//               onChange={(e) => setCustomHabit(e.target.value)}
//               className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
//             />

//             <div className="mt-3 flex justify-end gap-2">
//               <button
//                 onClick={() => {
//                   setShowInput(false);
//                   setCustomHabit("");
//                 }}
//                 className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-200"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={() => {
//                   if (customHabit.trim() !== "") {
//                     setCustomHabits([...customHabits, customHabit]);
//                     setCustomHabit("");
//                     setShowInput(false);
//                   }
//                 }}
//                 className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
//               >
//                 Add habit
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Onboarding;
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Dumbbell,
  ClipboardList,
  BookOpen,
  Brain,
  Moon,
  Sparkles,
  ArrowRight,
  Plus,
} from "lucide-react";

function Onboarding() {
  const navigate = useNavigate();
  // Get the saved user from localStorage
  const savedUser = localStorage.getItem("user");

  // Convert the saved information back into an object
  const user = savedUser ? JSON.parse(savedUser) : null;

  // Store the habits the user has selected
  const [selectedHabits, setSelectedHabits] = useState([]);

  // Custom habit states
  const [customHabit, setCustomHabit] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [customHabits, setCustomHabits] = useState([]);

  // All the default habits
  const habits = [
    {
      name: "Health",
      description: "Feel better, have more energy",
      icon: Heart,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      name: "Fitness",
      description: "Get stronger, stay active",
      icon: Dumbbell,
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      name: "Productivity",
      description: "Get more done",
      icon: ClipboardList,
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-500",
    },
    {
      name: "Learning",
      description: "Build new skills",
      icon: BookOpen,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      name: "Mindfulness",
      description: "Reduce stress, be present",
      icon: Brain,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      name: "Sleep",
      description: "Better rest, better you",
      icon: Moon,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      name: "Personal",
      description: "Be the best version of yourself",
      icon: Sparkles,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  // Select or deselect a habit
  const toggleHabit = (habitName) => {
    setSelectedHabits((previousHabits) => {
      // If the habit is already selected, remove it
      if (previousHabits.includes(habitName)) {
        return previousHabits.filter((habit) => habit !== habitName);
      }

      // Otherwise, add it to the selected habits
      return [...previousHabits, habitName];
    });
  };
  const handleNext = () => {
    if (selectedHabits.length === 0) {
      alert("Please select at least one habit.");
      return;
    }

    // Save the selected habits
    localStorage.setItem("selectedHabits", JSON.stringify(selectedHabits));

    // Go to dashboard
    navigate("/dashboard");
  };

  // Add a custom habit
  const addCustomHabit = () => {
    const newHabit = customHabit.trim();

    // Don't add an empty habit
    if (newHabit === "") {
      return;
    }

    // Don't allow duplicate custom habits
    if (
      customHabits.includes(newHabit) ||
      habits.some((habit) => habit.name === newHabit)
    ) {
      alert("This habit already exists.");
      return;
    }

    // Add the new habit to the custom habits
    setCustomHabits((previousHabits) => [...previousHabits, newHabit]);

    // Clear the input
    setCustomHabit("");

    // Hide the input
    setShowInput(false);
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] px-4 py-8">
      <div className="mx-auto min-h-[700px] max-w-4xl rounded-lg border border-gray-200 bg-white px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Your logo can go here */}
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-20 max-w-xl text-center">
          {/* Welcome message */}
          <h2 className="mb-4 text-lg font-medium text-green-600">
            Welcome, {user?.name || "there"}! 👋
          </h2>

          <h1 className="text-2xl font-bold text-gray-800">
            What do you want to improve?
          </h1>

          <p className="mt-3 text-sm text-gray-400">
            Select the areas you'd like to focus on. You can choose more than
            one.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Default habit cards */}
          {habits.map((habit) => {
            const Icon = habit.icon;

            // Check if this habit is selected
            const isSelected = selectedHabits.includes(habit.name);

            return (
              <div
                key={habit.name}
                onClick={() => toggleHabit(habit.name)}
                className={`group flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all duration-200 ${
                  isSelected
                    ? "border-green-800 bg-green-800 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50 hover:shadow-sm"
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    isSelected ? "bg-green-700" : habit.iconBg
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isSelected ? "text-white" : habit.iconColor
                    }`}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className={`font-semibold ${
                      isSelected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {habit.name}
                  </h3>

                  <p
                    className={`text-xs ${
                      isSelected ? "text-green-100" : "text-gray-400"
                    }`}
                  >
                    {habit.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Custom habits */}
          {customHabits.map((habit) => {
            const isSelected = selectedHabits.includes(habit);

            return (
              <div
                key={habit}
                onClick={() => toggleHabit(habit)}
                className={`group flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all duration-200 ${
                  isSelected
                    ? "border-green-800 bg-green-800 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50 hover:shadow-sm"
                }`}
              >
                {/* Custom habit icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                    isSelected ? "bg-green-700" : "bg-green-50"
                  }`}
                >
                  <Sparkles
                    className={`h-6 w-6 ${
                      isSelected ? "text-white" : "text-green-500"
                    }`}
                  />
                </div>

                {/* Custom habit text */}
                <div>
                  <h3
                    className={`font-semibold ${
                      isSelected ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {habit}
                  </h3>

                  <p
                    className={`text-xs ${
                      isSelected ? "text-green-100" : "text-gray-400"
                    }`}
                  >
                    Your custom habit
                  </p>
                </div>
              </div>
            );
          })}

          {/* Create your own habit button */}
          <div className="sm:col-span-2">
            {!showInput ? (
              <button
                onClick={() => setShowInput(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 p-4 text-sm font-medium text-gray-500 transition-all duration-200 hover:border-green-500 hover:bg-green-50 hover:text-green-600"
              >
                <Plus className="h-4 w-4" />
                Create your own habit
              </button>
            ) : (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <input
                  type="text"
                  placeholder="e.g. Read 10 pages every day"
                  value={customHabit}
                  onChange={(e) => setCustomHabit(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      addCustomHabit();
                    }
                  }}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

                <div className="mt-3 flex justify-end gap-2">
                  {/* Cancel */}
                  <button
                    onClick={() => {
                      setShowInput(false);
                      setCustomHabit("");
                    }}
                    className="rounded-lg px-4 py-2 text-sm text-gray-500 transition hover:bg-gray-200"
                  >
                    Cancel
                  </button>

                  {/* Add */}
                  <button
                    onClick={addCustomHabit}
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    Add habit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selected habits count */}
        {selectedHabits.length > 0 && (
          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-500">
            {selectedHabits.length}{" "}
            {selectedHabits.length === 1 ? "area" : "areas"} selected
          </p>
        )}

        {/* Next button */}
        <div className="mx-auto mt-8 flex max-w-2xl justify-end">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
