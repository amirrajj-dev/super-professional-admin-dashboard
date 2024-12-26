import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { subject: 'سن', A: 120, B: 110, fullMark: 150 },
  { subject: 'جنسیت', A: 98, B: 130, fullMark: 150 },
  { subject: 'محل زندگی', A: 86, B: 130, fullMark: 150 },
  { subject: 'وضعیت تحصیلی', A: 99, B: 100, fullMark: 150 },
  { subject: 'سطح درآمد', A: 85, B: 90, fullMark: 150 },
  { subject: 'علاقه‌مندی‌ها', A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={'85%'}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 16  }} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tickCount={6} />
        <Radar name="رضا" dataKey="A" stroke="#0999c2" fill="#0999c2" fillOpacity={0.6} />
        <Radar name="مبینا" dataKey="B" stroke="#1ab555" fill="#1ab555" fillOpacity={0.6} />
        <Legend />
        <Tooltip/>
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomerSegmentationChart;