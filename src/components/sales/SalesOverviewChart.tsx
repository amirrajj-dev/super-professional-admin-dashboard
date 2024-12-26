import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  salesDataThisMonth,
  salesDataNextMonth,
  salesDataPrevMonth,
} from "../../db/data";

const SalesOverviewChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("thisMonth");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  const getData = () => {
    switch (selectedMonth) {
      case "nextMonth":
        return salesDataNextMonth;
      case "prevMonth":
        return salesDataPrevMonth;
      case "thisMonth":
      default:
        return salesDataThisMonth;
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
          <option value="nextMonth">ماه بعد</option>
          <option value="prevMonth">ماه قبل</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={getData()}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickMargin={40} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesOverviewChart;
