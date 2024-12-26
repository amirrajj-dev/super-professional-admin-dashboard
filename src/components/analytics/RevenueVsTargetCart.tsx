import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  revenueTargetDataThisMonth,
  revenueTargetDataLastMonth,
  revenueTargetDataNextMonth,
} from "../../db/data";

const RevenueVsTargetChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("thisMonth");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const getData = () => {
    switch (selectedMonth) {
      case "lastMonth":
        return revenueTargetDataLastMonth;
      case "nextMonth":
        return revenueTargetDataNextMonth;
      case "thisMonth":
      default:
        return revenueTargetDataThisMonth;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="p-2 border rounded-lg bg-gray-800 text-white"
        >
          <option value="thisMonth">این ماه</option>
          <option value="lastMonth">ماه قبل</option>
          <option value="nextMonth">ماه بعد</option>
        </select>
      </div>
      <h2 className="text-white font-dana-demi text-2xl mb-4">
        نمودار درآمد در مقابل هدف
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={getData()}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickMargin={40} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="target"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueVsTargetChart;
