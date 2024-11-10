"use client";
import { useState } from "react";

export default function Analytics() {
  const [analyticsData] = useState({
    totalSales: 10000,
    totalOrders: 5,
    topSellingItems: [
      { name: "Momo", quantity: 150 },
      { name: "Aalu ko achaar", quantity: 120 },
      { name: "Sell Roti", quantity: 90 },
    ],
    newCustomers: 15,
    orderStatusCount: {
      pending: 10,
      completed: 100,
      cancelled: 10,
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Analytics Dashboard
      </h1>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Total Sales */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-green-700">Total Sales</h2>
          <p className="text-2xl font-bold text-green-800 mt-2">
            Rs {analyticsData.totalSales.toFixed(2)}
          </p>
        </div>

        {/* Total Orders */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-700">Total Orders</h2>
          <p className="text-2xl font-bold text-blue-800 mt-2">
            {analyticsData.totalOrders}
          </p>
        </div>

        {/* New Customers */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-purple-700">
            New Customers
          </h2>
          <p className="text-2xl font-bold text-purple-800 mt-2">
            {analyticsData.newCustomers}
          </p>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        {/* Top-Selling Items */}
        <h2 className="text-xl font-semibold mb-4">Top-Selling Items</h2>
        <ul className="space-y-2">
          {analyticsData.topSellingItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-gray-50 rounded-md"
            >
              <span>{item.name}</span>
              <span className="font-semibold">{item.quantity} orders</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Status Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Order Status Distribution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-yellow-100 p-4 rounded-md text-center">
            <h3 className="font-semibold text-yellow-700">Pending</h3>
            <p className="text-lg font-bold text-yellow-800">
              {analyticsData.orderStatusCount.pending}
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-md text-center">
            <h3 className="font-semibold text-green-700">Completed</h3>
            <p className="text-lg font-bold text-green-800">
              {analyticsData.orderStatusCount.completed}
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded-md text-center">
            <h3 className="font-semibold text-red-700">Cancelled</h3>
            <p className="text-lg font-bold text-red-800">
              {analyticsData.orderStatusCount.cancelled}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
