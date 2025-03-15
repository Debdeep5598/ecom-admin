"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", Sales: 15, Revenue: 300 },
  { name: "Tue", Sales: 20, Revenue: 400 },
  { name: "Wed", Sales: 18, Revenue: 350 },
  { name: "Thu", Sales: 22, Revenue: 500 },
  { name: "Fri", Sales: 25, Revenue: 600 },
  { name: "Sat", Sales: 12, Revenue: 250 },
  { name: "Sun", Sales: 8, Revenue: 150 },
];

const Analytics = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Weekly Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Sales" fill="#007bff" name="Total Sales" />
          <Bar dataKey="Revenue" fill="#28a745" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
