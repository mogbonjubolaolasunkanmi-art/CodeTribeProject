function HabitItem({ habit }) {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 py-5">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-2xl">
          {habit.icon}
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-gray-700">{habit.title}</h3>

          <p className="text-sm text-gray-400">
            {habit.time} • {habit.frequency}
          </p>
        </div>
      </div>

      {/* Check */}
      <button
        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
          habit.completed
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-gray-200 bg-white"
        }`}
      >
        {habit.completed && "✓"}
      </button>
    </div>
  );
}

export default HabitItem;
