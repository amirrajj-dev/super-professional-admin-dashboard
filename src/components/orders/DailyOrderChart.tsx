import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { dailyOrderData } from "../../db/data";

const DailyOrderChart = () => {
  return (
    <ResponsiveContainer width="100%" height={"85%"}>
      <LineChart
        data={dailyOrderData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="date" />
        <YAxis tickMargin={40} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#2e4ac6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DailyOrderChart;
