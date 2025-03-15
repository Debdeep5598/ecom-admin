'use client';

import React, { useState } from 'react';

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Static data for orders
  const orders = [
    { id: 1, customer: 'John Doe', total: 100, status: 'Pending', date: '2025-03-10' },
    { id: 2, customer: 'Jane Smith', total: 250, status: 'Completed', date: '2025-03-11' },
    { id: 3, customer: 'Sam Green', total: 150, status: 'Shipped', date: '2025-03-12' },
    { id: 4, customer: 'Anna White', total: 200, status: 'Pending', date: '2025-03-13' },
  ];

  const filteredOrders = orders.filter((order) => {
    const statusMatch = statusFilter ? order.status === statusFilter : true;
    const dateMatch = startDate && endDate
      ? new Date(order.date) >= new Date(startDate) && new Date(order.date) <= new Date(endDate)
      : true;

    return statusMatch && dateMatch;
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold">Orders</h1>
      <p>Manage customer orders here.</p>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="w-1/4">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="w-1/4">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-900">${order.total}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.status}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
