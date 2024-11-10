"use client";
import { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "Manoj Adhikari",
      status: "Pending",
      date: "2024-11-01",
      items: [{ name: "Momo", quantity: 2, price: 120 }],
    },
    {
      id: 2,
      customerName: "Kelvin Khanal",
      status: "Completed",
      date: "2024-11-02",
      items: [{ name: "Sell Roti", quantity: 10, price: 10 }],
    },
    {
      id: 2,
      customerName: "Aditya Poudel",
      status: "Completed",
      date: "2024-11-02",
      items: [{ name: "Aalu ko achar", quantity: 1, price: 50 }],
    },
  ]);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Function to calculate total price for an order
  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Manage Orders</h1>

      {/* Order List/Table */}
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Total</th>
            <th className="py-2">Status</th>
            <th className="py-2">Date</th>
            <th className="py-2">Items</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border-t py-2">{order.id}</td>
              <td className="border-t py-2">{order.customerName}</td>
              <td className="border-t py-2">
                Rs {calculateTotal(order.items).toFixed(2)}
              </td>
              <td className="border-t py-2">
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="border p-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
              <td className="border-t py-2">{order.date}</td>
              <td className="border-t py-2">
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.quantity} x {item.name} (Rs {item.price.toFixed(2)})
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border-t py-2">
                <button className="text-blue-500">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
