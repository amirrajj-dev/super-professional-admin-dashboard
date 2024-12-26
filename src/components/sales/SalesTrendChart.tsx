import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesTrendData } from "../../db/data";

const SalesTrendChart = () => {
  return (
    <div className="p-4">
      <h2 className="text-white font-dana-demi text-2xl mb-4">
        روند فروش هفتگی
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={salesTrendData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#10B981" /> {/* emerald-500 */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesTrendChart;
