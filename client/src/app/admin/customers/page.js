"use client";
import { useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Manoj Adhikari",
      email: "admanoj111@gmail.com",
      phone: "9861439271",
      address: "Bhaisepati",
      date: "11/2/2024",
    },
    {
      id: 2,
      name: "kelvin khanal",
      email: "kelvin@gmail.com",
      phone: "984301457",
      address: "Tinkune",
      date: "11/2/2024",
    },
  ]);

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Manage Customers</h1>

      {/* Customer List/Table */}
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="py-2">Customer ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Phone</th>
            <th className="py-2">Address</th>
            <th className="py-2">Registration Date</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border-t py-2">{customer.id}</td>
              <td className="border-t py-2">{customer.name}</td>
              <td className="border-t py-2">{customer.email}</td>
              <td className="border-t py-2">{customer.phone}</td>
              <td className="border-t py-2">{customer.address}</td>
              <td className="border-t py-2">{customer.date}</td>
              <td className="border-t py-2">
                <button className="text-blue-500 mr-2">View</button>
                <button
                  className="text-red-500"
                  onClick={() => deleteCustomer(customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
