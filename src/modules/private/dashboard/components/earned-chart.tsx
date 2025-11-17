import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function EarnedChart() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "",
        data: [0, 3, 1, 2, 8, 1, 5, 1],
      },
    ],
    chart: {
      type: "area",
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
    },
    colors: ["var(--color-primary)"],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      colors: ["var(--color-primary)"],
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.8,
        stops: [100],
      },
    },
    tooltip: {
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <>
      <CardBox className="overflow-hidden p-0">
        <div className="flex items-end justify-between p-6">
          <div>
            <h5 className="card-title">2,545</h5>
            <p className="card-subtitle">Earned</p>
          </div>
          <span className="text-success text-sm">+1.20%</span>
        </div>

        <Chart
          options={ChartData}
          series={ChartData.series}
          type="area"
          height="90px"
          width="100%"
        />
      </CardBox>
    </>
  );
}
