
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, AlertTriangle, Award, BarChart } from "lucide-react";
import PerformanceScoreChart from "./charts/PerformanceScoreChart";
import PerformanceTrendChart from "./charts/PerformanceTrendChart";
import PerformanceLevelPieChart from "./charts/PerformanceLevelPieChart";
import SalaryDistributionChart from "./charts/SalaryDistributionChart";
import PerformanceRatioChart from "./charts/PerformanceRatioChart";
import SalaryGapAnalysisChart from "./charts/SalaryGapAnalysisChart";
import TopRankingChart from "./charts/TopRankingChart";
import PerformanceDistributionChart from "./charts/PerformanceDistributionChart";
import SalaryComparisonChart from "./charts/SalaryComparisonChart";
import IncentiveEffectivenessChart from "./charts/IncentiveEffectivenessChart";
import { companyUnits } from "@/services/performanceData";

const PerformanceDashboard = () => {
  const totalUnits = companyUnits.length;
  const avgScore = companyUnits.reduce((sum, unit) => sum + unit.score, 0) / totalUnits;
  const totalBudget = companyUnits.reduce((sum, unit) => sum + unit.salaryBudget, 0);
  const totalActual = companyUnits.reduce((sum, unit) => sum + unit.actualSalary, 0);
  const unitsWithLowGap = companyUnits.filter(unit => unit.salaryGapRatio < 1.3).length;
  const aLevelUnits = companyUnits.filter(unit => unit.level === 'A').length;

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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
                <p className="text-sm font-medium text-slate-600">总薪酬预算</p>
                <p className="text-2xl font-bold text-blue-600">{(totalBudget / 10000).toFixed(0)}万</p>
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

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">A级单位数</p>
                <p className="text-2xl font-bold text-purple-600">{aLevelUnits}</p>
              </div>
              <Award className="w-8 h-8 text-purple-500 opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 一、组织绩效考核结果总览 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <BarChart className="w-6 h-6 text-[#007470]" />
          <h2 className="text-2xl font-bold text-slate-800">一、组织绩效考核结果总览</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
      </div>

      {/* 二、单位绩效薪酬配置总览 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-6 h-6 text-[#007470]" />
          <h2 className="text-2xl font-bold text-slate-800">二、单位绩效薪酬配置总览</h2>
        </div>
        
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
              <CardTitle className="text-[#007470]">单位人均薪酬与绩效对比</CardTitle>
            </CardHeader>
            <CardContent>
              <SalaryComparisonChart />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 三、绩效激励效果分析 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6 text-[#007470]" />
          <h2 className="text-2xl font-bold text-slate-800">三、绩效激励效果分析</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007470]">全公司绩效分档分布</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceDistributionChart />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-[#007470]">激励效果散点分析</CardTitle>
            </CardHeader>
            <CardContent>
              <IncentiveEffectivenessChart />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 四、综合诊断与排行榜展示 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-[#007470]" />
          <h2 className="text-2xl font-bold text-slate-800">四、综合诊断与排行榜展示</h2>
        </div>
        
        <TopRankingChart />
      </div>
    </div>
  );
};

export default PerformanceDashboard;
