"use client";
import * as React from "react";
import { Clock } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  orders: {
    label: "Orders",
  },

  onDelivery: {
    label: "On Delivery",
    color: "#48D1DD",
  },

  delivered: {
    label: "Delivered",
    color: "#63E472",
  },

  cancelled: {
    label: "Cancelled",
    color: "#EC4651",
  },

  waiting: {
    label: "Waiting",
    color: "#EFF53B",
  },
};

const chartData = [
  { status: "onDelivery", orders: 10, fill: chartConfig.onDelivery.color },
  { status: "delivered", orders: 20, fill: chartConfig.delivered.color },
  { status: "cancelled", orders: 5, fill: chartConfig.cancelled.color },
  { status: "waiting", orders: 5, fill: chartConfig.waiting.color },
];

export function OrderStatusChart() {
  const totalOrders = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.orders, 0);
  }, []);

  return (
    <Card className="flex flex-col shadow-none border-none">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="orders"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (!viewBox) return null;
                  const { cx, cy } = viewBox;
                  return (
                    <g>
                      <text
                        x={cx}
                        y={cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={cx}
                          y={cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          5
                        </tspan>
                        <tspan
                          x={cx}
                          y={cy + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Waiting Orders
                        </tspan>
                      </text>
                    </g>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          5 orders waiting to be processed <Clock className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total orders: {totalOrders}
        </div>
      </CardFooter>
      <div className="flex flex-row justify-between space-x-4 mt-4">
        <Card className="flex-1 p-4 bg-[#48D1DD] text-white rounded-lg">
          <div className="text-xl font-bold">{chartData[0].orders}</div>
          <div className="text-sm">On Delivery</div>
        </Card>
        <Card className="flex-1 p-4 bg-[#63E472] text-white rounded-lg">
          <div className="text-xl font-bold">{chartData[1].orders}</div>
          <div className="text-sm">Delivered</div>
        </Card>
        <Card className="flex-1 p-4 bg-[#EFF53B] text-black rounded-lg">
          <div className="text-xl font-bold">{chartData[3].orders}</div>
          <div className="text-sm">Waiting</div>
        </Card>
      </div>
    </Card>
  );
}
