import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userActivityChart } from "../../db/data";

const UserActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        width={500}
        height={300}
        data={userActivityChart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickMargin={45} color="#fff" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e1e1e",
            borderColor: "#fff",
            color: "#ffffff",
            fontSize: "14px",
            fontFamily: "IranNastaliq",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
          itemStyle={{
            color: "#fff",
          }}
        />
        <Legend />
        <Bar dataKey="16-20" stackId="a" fill="#8884d8" />
        <Bar dataKey="4-8" stackId="a" fill="#ba0f0f" />
        <Bar dataKey="8-12" stackId="a" fill="#12e953c2" />
        <Bar dataKey="12-16" stackId="a" fill="#a9cb12c2" />
        <Bar dataKey="0-4" stackId="a" fill="#394cb9c2" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserActivityChart;
