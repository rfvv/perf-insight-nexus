
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { companyUnits } from '@/services/performanceData';

const SalaryUtilizationChart = () => {
  const data = companyUnits.map(unit => ({
    name: unit.name.replace('供电公司', ''),
    utilizationRate: unit.utilizationRate,
    status: unit.utilizationRate >= 95 ? 'high' : unit.utilizationRate >= 90 ? 'normal' : 'low'
  }));

  const getBarColor = (status: string) => {
    switch (status) {
      case 'high': return '#007470';
      case 'normal': return '#4ade80';
      case 'low': return '#fbbf24';
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
            domain={[80, 100]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value: any) => [`${value}%`, '使用率']}
            labelFormatter={(label) => `${label}供电公司`}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Bar 
            dataKey="utilizationRate" 
            fill="#007470"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryUtilizationChart;
