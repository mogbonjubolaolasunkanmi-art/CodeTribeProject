function StatCard({ title, value, percentage }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <h3 className="mb-3 font-semibold text-gray-700">
        {title}
      </h3>

      <p className="mb-4 text-sm text-gray-400">
        {value}
      </p>

      {percentage && (
        <>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: percentage }}
            ></div>
          </div>

          <p className="mt-2 text-right text-sm font-semibold text-gray-600">
            {percentage}
          </p>
        </>
      )}

    </div>
  );
}

export default StatCard;