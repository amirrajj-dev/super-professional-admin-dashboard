import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "وب سایت", value: 4000 },
  { name: "اپلیکیشن موبایل", value: 3000 },
  { name: "مارکت", value: 2000 },
  { name: "شبکه اجتماعی", value: 2780 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: 'white' }} tickMargin={12} />
        <YAxis tick={{ fill: 'white' }} tickMargin={40} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#475c79', color : 'white' , borderColor: '#71767c' }}
          itemStyle={{ color: '#e5e7eb' }}
        />
        <Bar dataKey="value" barSize={200}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;