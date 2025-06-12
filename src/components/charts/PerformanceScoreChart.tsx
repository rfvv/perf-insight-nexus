
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { companyUnits } from '@/services/performanceData';

const PerformanceScoreChart = () => {
  const data = companyUnits.map(unit => ({
    name: unit.name.replace('供电公司', ''),
    score: unit.score,
    level: unit.level
  }));

  const getBarColor = (level: string) => {
    switch (level) {
      case 'A': return '#007470';
      case 'B': return '#00a693';
      case 'C': return '#4ade80';
      default: return '#94a3b8';
    }
  };

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            domain={[70, 100]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value: any, name: any, props: any) => [
              `${value}分`,
              '绩效得分'
            ]}
            labelFormatter={(label) => `${label}供电公司`}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Bar 
            dataKey="score" 
            fill="#007470"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceScoreChart;
