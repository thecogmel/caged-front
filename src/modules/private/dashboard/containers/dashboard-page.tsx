import {
  CurrentValue,
  Customers,
  EarnedChart,
  FollowersChart,
  MonthlyEarning,
  MostVisited,
  PageImpression,
  Projects,
  RevenueUpdates,
  SalesOverview,
  TotalEarningChart,
  ViewsChart,
  YarlyBreakup,
  YearlySales,
} from "../components";

export function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <FollowersChart />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <ViewsChart />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <EarnedChart />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <TotalEarningChart />
      </div>
      <div className="col-span-12">
        <CurrentValue />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <YarlyBreakup />
        <MonthlyEarning />
        <MostVisited />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <YearlySales />
        <PageImpression />
        <div className="mt-[30px] grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <Customers />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <Projects />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <RevenueUpdates />
        <SalesOverview />
      </div>
    </div>
  );
}
