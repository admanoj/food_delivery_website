"use client";
import { useState } from "react";

export default function Settings() {
  const [businessHours, setBusinessHours] = useState({
    open: "11:00 AM",
    close: "5:00 PM",
  });

  const [profile, setProfile] = useState({
    name: "Manoj Adhikari",
    email: "admanoj111@gmail.com",
    phone: "9861439271",
  });

  const handleInputChange = (event, field, category) => {
    if (category === "profile") {
      setProfile({ ...profile, [field]: event.target.value });
    } else if (category === "businessHours") {
      setBusinessHours({ ...businessHours, [field]: event.target.value });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">General Information</h2>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => handleInputChange(e, "name", "profile")}
          className="border p-2 w-full mt-2"
          placeholder="Admin Name"
        />
        <input
          type="email"
          value={profile.email}
          onChange={(e) => handleInputChange(e, "email", "profile")}
          className="border p-2 w-full mt-2"
          placeholder="Email"
        />
        <input
          type="text"
          value={profile.phone}
          onChange={(e) => handleInputChange(e, "phone", "profile")}
          className="border p-2 w-full mt-2"
          placeholder="Phone"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">Business Hours</h2>
        <label className="block">Open Time:</label>
        <input
          type="time"
          value={businessHours.open}
          onChange={(e) => handleInputChange(e, "open", "businessHours")}
          className="border p-2 w-full"
        />
        <label className="block mt-4">Close Time:</label>
        <input
          type="time"
          value={businessHours.close}
          onChange={(e) => handleInputChange(e, "close", "businessHours")}
          className="border p-2 w-full"
        />
      </section>

      {/* Other sections for notifications and preferences */}
    </div>
  );
}
