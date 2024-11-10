"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", income: 2000, expenditure: 1500 },
  { month: "February", income: 3000, expenditure: 2500 },
  { month: "March", income: 3500, expenditure: 2800 },
  { month: "April", income: 4000, expenditure: 3000 },
  { month: "May", income: 4500, expenditure: 3500 },
  { month: "June", income: 5000, expenditure: 4000 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenditure: {
    label: "Expenditure",
    color: "hsl(var(--chart-2))",
  },
};

export function Blockb_nQ3gk8w0K05() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>Check and manage your orders</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            {/* Y-Axis with custom tick formatter and domain */}
            <YAxis
              domain={[0, 10000]} // Set the Y-axis range to a maximum of 10k
              tickCount={11} // Display ticks at each 1k interval
              tickFormatter={(value) => `${value / 1000}k`}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="expenditure"
              type="monotone"
              stroke="var(--color-expenditure)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total income and expenditure for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
