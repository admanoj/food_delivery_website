import React from "react";
import { Card } from "@/components/ui/card";
import { ChefHat, ShoppingCart, Users } from "lucide-react";
import GreetingHeader from "../adminText/page";

const StatsCard = () => {
  return (
    <div>
      <GreetingHeader />
      <div className="flex flex-row gap-4 ml-4">
        {" "}
        {/* Reduced gap between cards */}
        {/* Total Menu */}
        <Card className="p-3 w-56  bg-white m-2">
          {" "}
          {/* Smaller padding and width */}
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-blue-100 text-blue-500 p-2 rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5" /> {/* Smaller icon size */}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">5</div> {/* Smaller font */}
              <div className="text-gray-600 mt-1 text-sm">Total Menu</div>
              <div className="text-green-500 text-xs mt-1">4% (30 days)</div>
            </div>
          </div>
        </Card>
        {/* Total Revenue */}
        <Card className="p-3 w-56 bg-white m-2">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-500 p-2 rounded-full flex items-center justify-center font-bold">
              रू
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">10k</div>
              <div className="text-gray-600 mt-1 text-sm">Total Revenue</div>
              <div className="text-green-500 text-xs mt-1">4% (30 days)</div>
            </div>
          </div>
        </Card>
        {/* Total Orders */}
        <Card className="p-3 w-56 bg-white m-2">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-green-100 text-green-500 p-2 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">20</div>
              <div className="text-gray-600 mt-1 text-sm">Total Orders</div>
              <div className="text-green-500 text-xs mt-1">4% (30 days)</div>
            </div>
          </div>
        </Card>
        {/* Total Customers */}
        <Card className="p-3 w-56 bg-white m-2">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-purple-100 text-purple-500 p-2 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">50</div>
              <div className="text-gray-600 mt-1 text-sm">Total Customers</div>
              <div className="text-green-500 text-xs mt-1">5% (30 days)</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatsCard;
