import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { productPerformanceChartData } from "../../db/data";

const ProductPerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        width={500}
        height={300}
        data={productPerformanceChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickMargin={40} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="فروش"
          fill="#c2c810"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="سود"
          fill="#08dc59"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="درآمد"
          fill="#3022d0"
          activeBar={<Rectangle fill="blue" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ProductPerformanceChart;
