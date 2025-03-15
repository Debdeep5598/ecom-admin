"use client";
import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const stats = [
  { 
    title: "Total Products", value: "120", 
    icon: <FaBox className="text-blue-600 text-4xl" />, 
    color: "from-blue-100 to-blue-200"
  },
  { 
    title: "Total Sales", value: "1,245", 
    icon: <FaShoppingCart className="text-green-600 text-4xl" />, 
    color: "from-green-100 to-green-200"
  },
  { 
    title: "Earnings", value: "$42,890", 
    icon: <FaDollarSign className="text-purple-600 text-4xl" />, 
    color: "from-purple-100 to-purple-200"
  },
  { 
    title: "Customers", value: "340", 
    icon: <FaUsers className="text-yellow-600 text-4xl" />, 
    color: "from-yellow-100 to-yellow-200"
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`bg-gradient-to-br ${stat.color} p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-between`}
        >
          <div>
            <h3 className="text-gray-700 text-lg font-medium">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
          {stat.icon}
        </div>
      ))}
    </div>
  );
};

export default Stats;
