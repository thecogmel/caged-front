import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function RevenueUpdates() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "Footware",
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5],
      },
      {
        name: "Fashionware",
        data: [-2.8, -1.1, -3.2, -1.5, -1.9, -2.8],
      },
    ],
    chart: {
      height: 290,
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      offsetX: -20,
      stacked: true,
    },
    colors: ["var(--color-primary)", "var(--color-secondary)"],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "20%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
  return (
    <>
      <CardBox className="pb-3">
        <div>
          <h5 className="card-title">Revenue Updates</h5>
          <p className="card-subtitle">Overview of Profit</p>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="bg-primary h-2 w-2 rounded-full"></span>
            <span className="text-xs">Footware</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-secondary h-2 w-2 rounded-full"></span>
            <span className="text-xs">Fashionware</span>
          </div>
        </div>
        <div className="revenuechart -me-6">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="bar"
            height="290px"
            width="100%"
          />
        </div>
      </CardBox>
    </>
  );
}
