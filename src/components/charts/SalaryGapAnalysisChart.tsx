
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { companyUnits } from '@/services/performanceData';

const SalaryGapAnalysisChart = () => {
  const data = companyUnits.map(unit => ({
    name: unit.name.replace('供电公司', ''),
    ratio: unit.salaryGapRatio,
    status: unit.salaryGapRatio >= 1.3 ? 'qualified' : 'unqualified'
  }));

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
            domain={[1.0, 1.6]}
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value: any) => [`${value}倍`, '拉差倍比']}
            labelFormatter={(label) => `${label}供电公司`}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <ReferenceLine y={1.3} stroke="#ef4444" strokeDasharray="5 5" label="目标线(1.3倍)" />
          <Bar 
            dataKey="ratio" 
            fill={(entry: any) => entry.status === 'qualified' ? '#007470' : '#fbbf24'}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryGapAnalysisChart;
