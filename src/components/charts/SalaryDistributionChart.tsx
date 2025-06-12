
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { companyUnits } from '@/services/performanceData';

const SalaryDistributionChart = () => {
  const data = companyUnits.map(unit => ({
    name: unit.name.replace('供电公司', ''),
    预算: unit.salaryBudget / 10000,
    实际: unit.actualSalary / 10000
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
            tick={{ fontSize: 12 }}
          />
          <Tooltip 
            formatter={(value: any, name: any) => [
              `${value}万元`,
              name === '预算' ? '预算工资' : '实际工资'
            ]}
            labelFormatter={(label) => `${label}供电公司`}
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar 
            dataKey="预算" 
            fill="#94a3b8"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="实际" 
            fill="#007470"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryDistributionChart;
