import StatsCard from "@/components/card/page";
import Navbar from "@/components/navbar/page";
import OrderSummary from "@/components/summary/page";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <StatsCard />
      <OrderSummary />
    </div>
  );
};

export default Dashboard;
