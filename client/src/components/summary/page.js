"use client"; // This line marks the component as a Client Component

import React from "react";
import { OrderStatusChart } from "../order-status-chart";
import { Blockb_nQ3gk8w0K05 } from "../block-b_nQ3gk8w0K05";

const OrderSummary = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {/* Order Summary Card */}
      <div className="flex-1 min-w-[300px] max-w-[50%] p-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <p className="text-gray-600 text-sm mt-1">
              Check and manage your orders
            </p>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded">
              Today
            </span>
            <span className="text-gray-500 text-xs font-medium px-3 py-1">
              Weekly
            </span>
            <span className="text-gray-500 text-xs font-medium px-3 py-1">
              Monthly
            </span>
          </div>
        </div>
        <OrderStatusChart />
      </div>

      {/* Block Component Card */}
      <div className="flex-1 min-w-[300px] max-w-[50%] p-6 bg-white shadow-lg rounded-lg">
        <Blockb_nQ3gk8w0K05 />
      </div>
    </div>
  );
};

export default OrderSummary;
