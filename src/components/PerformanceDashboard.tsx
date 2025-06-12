
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, AlertTriangle } from "lucide-react";
import PerformanceScoreChart from "./charts/PerformanceScoreChart";
import PerformanceTrendChart from "./charts/PerformanceTrendChart";
import PerformanceLevelPieChart from "./charts/PerformanceLevelPieChart";
import SalaryDistributionChart from "./charts/SalaryDistributionChart";
import SalaryUtilizationChart from "./charts/SalaryUtilizationChart";
import PerformanceRatioChart from "./charts/PerformanceRatioChart";
import SalaryGapAnalysisChart from "./charts/SalaryGapAnalysisChart";
import TopRankingChart from "./charts/TopRankingChart";
import { companyUnits } from "@/services/performanceData";

const PerformanceDashboard = () => {
  const totalUnits = companyUnits.length;
  const avgScore = companyUnits.reduce((sum, unit) => sum + unit.score, 0) / totalUnits;
  const totalBudget = companyUnits.reduce((sum, unit) => sum + unit.salaryBudget, 0);
  const totalActual = companyUnits.reduce((sum, unit) => sum + unit.actualSalary, 0);
  const avgUtilization = (totalActual / totalBudget) * 100;
  const unitsWithLowGap = companyUnits.filter(unit => unit.salaryGapRatio < 1.3).length;

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* 头部标题区域 */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">绩效总览数据看板</h1>
            <p className="text-slate-600">宏观掌控全局绩效运行态势 · 数据更新时间：2024年6月</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-[#007470] text-white border-[#007470]">
              <TrendingUp className="w-3 h-3 mr-1" />
              实时监控
            </Badge>
          </div>
        </div>
      </div>

      {/* 关键指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-l-[#007470]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">平均绩效得分</p>
                <p className="text-2xl font-bold text-[#007470]">{avgScore.toFixed(1)}</p>
              </div>
              <Target className="w-8 h-8 text-[#007470] opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">工资包使用率</p>
                <p className="text-2xl font-bold text-blue-600">{avgUtilization.toFixed(1)}%</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">参与单位数</p>
                <p className="text-2xl font-bold text-green-600">{totalUnits}</p>
              </div>
              <Users className="w-8 h-8 text-green-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">拉差不足单位</p>
                <p className="text-2xl font-bold text-orange-600">{unitsWithLowGap}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-500 opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 主要图表区域 */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white">
          <TabsTrigger value="performance" className="data-[state=active]:bg-[#007470] data-[state=active]:text-white">
            组织绩效考核
          </TabsTrigger>
          <TabsTrigger value="salary" className="data-[state=active]:bg-[#007470] data-[state=active]:text-white">
            薪酬配置总览
          </TabsTrigger>
          <TabsTrigger value="incentive" className="data-[state=active]:bg-[#007470] data-[state=active]:text-white">
            激励效果分析
          </TabsTrigger>
          <TabsTrigger value="ranking" className="data-[state=active]:bg-[#007470] data-[state=active]:text-white">
            综合诊断排名
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">单位绩效得分分布</CardTitle>
              </CardHeader>
              <CardContent>
                <PerformanceScoreChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">单位绩效等级分布</CardTitle>
              </CardHeader>
              <CardContent>
                <PerformanceLevelPieChart />
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007470]">单位绩效得分趋势（最近6个月）</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceTrendChart />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">单位定员承包工资分布</CardTitle>
              </CardHeader>
              <CardContent>
                <SalaryDistributionChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">单位工资包使用率</CardTitle>
              </CardHeader>
              <CardContent>
                <SalaryUtilizationChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="incentive" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">绩效倍比分布（5档）</CardTitle>
              </CardHeader>
              <CardContent>
                <PerformanceRatioChart />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-[#007470]">绩效薪酬拉差分析</CardTitle>
              </CardHeader>
              <CardContent>
                <SalaryGapAnalysisChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ranking" className="space-y-6">
          <TopRankingChart />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PerformanceDashboard;
