import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { saleChartData } from "../../db/data";

const SaleChart = () => {
  return (
    <div className="w-full h-[400px] md:h-[90%]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={saleChartData}
          reverseStackOrder={true} // Ensure stack order is reversed for RTL
        >
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="name" stroke="#d1d5db" />
          <YAxis stroke="#d1d5db" tickMargin={45} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderColor: "#71767c",
              color: "#fff",
            }}
            itemStyle={{ color: "#e5e7eb" }}
          />
          <Line
            type="monotone"
            dataKey="sale"
            stroke="#8884d8"
            activeDot={{ r: 0 }}
            dot={{ r: 0 }}
            strokeWidth={4}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SaleChart;
