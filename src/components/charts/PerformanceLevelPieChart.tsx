
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { performanceLevels } from '@/services/performanceData';

const PerformanceLevelPieChart = () => {
  const COLORS = {
    'A': '#007470',
    'B': '#00a693',
    'C': '#4ade80',
    'D': '#fbbf24',
    'E': '#ef4444'
  };

  const data = performanceLevels.filter(level => level.count > 0);

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="count"
            label={({ level, percentage }) => `${level}级 ${percentage}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.level as keyof typeof COLORS]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any, name: any, props: any) => [
              `${value}个单位`,
              '数量'
            ]}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceLevelPieChart;
