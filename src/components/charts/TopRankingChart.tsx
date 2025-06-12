
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { companyUnits } from '@/services/performanceData';

const TopRankingChart = () => {
  const topPerformers = [...companyUnits]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const topSalaryGap = [...companyUnits]
    .sort((a, b) => b.salaryGapRatio - a.salaryGapRatio)
    .slice(0, 5);

  const lowUtilization = [...companyUnits]
    .filter(unit => unit.utilizationRate < 90 || unit.salaryGapRatio < 1.3)
    .sort((a, b) => a.utilizationRate - b.utilizationRate);

  const getRankColor = (index: number) => {
    switch (index) {
      case 0: return 'bg-yellow-500';
      case 1: return 'bg-gray-400';
      case 2: return 'bg-orange-600';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 绩效排行榜 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#007470]">
            <Trophy className="w-5 h-5" />
            单位绩效Top5榜单
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((unit, index) => (
              <div key={unit.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${getRankColor(index)}`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{unit.name}</p>
                    <p className="text-sm text-slate-600">等级: {unit.level}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#007470]">{unit.score}分</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 拉差倍比排行榜 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#007470]">
            <TrendingUp className="w-5 h-5" />
            拉差最充分Top5榜单
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topSalaryGap.map((unit, index) => (
              <div key={unit.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${getRankColor(index)}`}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{unit.name}</p>
                    <p className="text-sm text-slate-600">{unit.employees}名员工</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#007470]">{unit.salaryGapRatio}倍</p>
                  {unit.salaryGapRatio >= 1.3 && (
                    <CheckCircle className="w-4 h-4 text-green-500 inline ml-1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 异常预警 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-600">
            <AlertTriangle className="w-5 h-5" />
            绩效异常预警提示
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lowUtilization.length > 0 ? (
              lowUtilization.map((unit) => (
                <div key={unit.id} className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-slate-800">{unit.name}</p>
                    <Badge variant="outline" className="text-orange-600 border-orange-300">
                      需关注
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-slate-600">
                    {unit.utilizationRate < 90 && (
                      <p>• 工资包使用率偏低: {unit.utilizationRate}%</p>
                    )}
                    {unit.salaryGapRatio < 1.3 && (
                      <p>• 薪酬拉差不足: {unit.salaryGapRatio}倍 (目标≥1.3倍)</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-500">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500" />
                <p>暂无异常预警</p>
                <p className="text-sm">所有单位运行正常</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopRankingChart;
