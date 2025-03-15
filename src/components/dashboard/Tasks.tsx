"use client";

const tasks = [
  { name: "Update Product Prices", progress: 75 },
  { name: "Ship Pending Orders", progress: 50 },
  { name: "Respond to Customer Queries", progress: 30 },
];

const Tasks = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Seller Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task.name}</p>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="h-4 bg-green-500 rounded-full"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
