
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { companyUnits } from '@/services/performanceData';

const IncentiveEffectivenessChart = () => {
  const data = companyUnits.map(unit => ({
    name: unit.name.replace('供电公司', ''),
    绩效得分: unit.score,
    拉差倍比: unit.salaryGapRatio,
    人均薪酬: Math.round(unit.actualSalary / unit.employees),
    等级: unit.level
  }));

  const getColor = (level: string) => {
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
        <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            type="number"
            dataKey="绩效得分"
            domain={[75, 95]}
            tick={{ fontSize: 12 }}
            name="绩效得分"
          />
          <YAxis 
            type="number"
            dataKey="拉差倍比"
            domain={[1.1, 1.5]}
            tick={{ fontSize: 12 }}
            name="拉差倍比"
          />
          <Tooltip 
            formatter={(value: any, name: any, props: any) => {
              if (name === '绩效得分') return [`${value}分`, '绩效得分'];
              if (name === '拉差倍比') return [`${value}倍`, '拉差倍比'];
              return [value, name];
            }}
            labelFormatter={(value, payload) => {
              if (payload && payload[0]) {
                return `${payload[0].payload.name}供电公司`;
              }
              return '';
            }}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          {data.map((entry, index) => (
            <Scatter
              key={index}
              data={[entry]}
              fill={getColor(entry.等级)}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncentiveEffectivenessChart;
