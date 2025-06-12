
// 模拟绩效数据
export interface CompanyUnit {
  id: string;
  name: string;
  score: number;
  level: 'A' | 'B' | 'C' | 'D' | 'E';
  salaryBudget: number;
  actualSalary: number;
  utilizationRate: number;
  salaryGapRatio: number;
  employees: number;
}

export interface PerformanceTrend {
  month: string;
  [key: string]: string | number;
}

export interface PerformanceLevel {
  level: string;
  count: number;
  percentage: number;
  avgSalary: number;
}

export const companyUnits: CompanyUnit[] = [
  {
    id: '1',
    name: '银川供电公司',
    score: 92.5,
    level: 'A',
    salaryBudget: 2500000,
    actualSalary: 2350000,
    utilizationRate: 94.0,
    salaryGapRatio: 1.45,
    employees: 158
  },
  {
    id: '2',
    name: '吴忠供电公司',
    score: 88.3,
    level: 'A',
    salaryBudget: 1800000,
    actualSalary: 1720000,
    utilizationRate: 95.6,
    salaryGapRatio: 1.38,
    employees: 142
  },
  {
    id: '3',
    name: '石嘴山供电公司',
    score: 85.7,
    level: 'B',
    salaryBudget: 1600000,
    actualSalary: 1480000,
    utilizationRate: 92.5,
    salaryGapRatio: 1.32,
    employees: 128
  },
  {
    id: '4',
    name: '中卫供电公司',
    score: 83.2,
    level: 'B',
    salaryBudget: 1400000,
    actualSalary: 1290000,
    utilizationRate: 92.1,
    salaryGapRatio: 1.28,
    employees: 115
  },
  {
    id: '5',
    name: '宁东供电公司',
    score: 79.8,
    level: 'C',
    salaryBudget: 1200000,
    actualSalary: 1050000,
    utilizationRate: 87.5,
    salaryGapRatio: 1.18,
    employees: 98
  },
  {
    id: '6',
    name: '固原供电公司',
    score: 76.4,
    level: 'C',
    salaryBudget: 1100000,
    actualSalary: 980000,
    utilizationRate: 89.1,
    salaryGapRatio: 1.15,
    employees: 89
  }
];

export const performanceTrends: PerformanceTrend[] = [
  { month: '1月', 银川供电公司: 90.2, 吴忠供电公司: 86.5, 石嘴山供电公司: 83.1, 中卫供电公司: 81.8, 宁东供电公司: 77.2, 固原供电公司: 74.5 },
  { month: '2月', 银川供电公司: 91.1, 吴忠供电公司: 87.2, 石嘴山供电公司: 84.3, 中卫供电公司: 82.1, 宁东供电公司: 78.1, 固原供电公司: 75.2 },
  { month: '3月', 银川供电公司: 91.8, 吴忠供电公司: 87.8, 石嘴山供电公司: 85.1, 中卫供电公司: 82.8, 宁东供电公司: 78.9, 固原供电公司: 75.8 },
  { month: '4月', 银川供电公司: 92.3, 吴忠供电公司: 88.1, 石嘴山供电公司: 85.5, 中卫供电公司: 83.0, 宁东供电公司: 79.4, 固原供电公司: 76.1 },
  { month: '5月', 银川供电公司: 92.1, 吴忠供电公司: 88.0, 石嘴山供电公司: 85.4, 中卫供电公司: 82.9, 宁东供电公司: 79.2, 固原供电公司: 76.0 },
  { month: '6月', 银川供电公司: 92.5, 吴忠供电公司: 88.3, 石嘴山供电公司: 85.7, 中卫供电公司: 83.2, 宁东供电公司: 79.8, 固原供电公司: 76.4 }
];

export const performanceLevels: PerformanceLevel[] = [
  { level: 'A', count: 2, percentage: 33.3, avgSalary: 18500 },
  { level: 'B', count: 2, percentage: 33.3, avgSalary: 15200 },
  { level: 'C', count: 2, percentage: 33.3, avgSalary: 12800 },
  { level: 'D', count: 0, percentage: 0, avgSalary: 0 },
  { level: 'E', count: 0, percentage: 0, avgSalary: 0 }
];

export const performanceDistribution = [
  { level: 'A档(90分以上)', count: 125, avgSalary: 18500, percentage: 15.2 },
  { level: 'B档(80-89分)', count: 285, avgSalary: 15200, percentage: 34.6 },
  { level: 'C档(70-79分)', count: 312, avgSalary: 12800, percentage: 37.9 },
  { level: 'D档(60-69分)', count: 85, avgSalary: 10500, percentage: 10.3 },
  { level: 'E档(60分以下)', count: 17, avgSalary: 8200, percentage: 2.1 }
];
