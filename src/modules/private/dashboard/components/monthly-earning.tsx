import { Icon } from "@iconify/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import icon from "@/assets/images/svgs/icon-master-card-2.svg";
import CardBox from "@/shared/components/card-box";

export function MonthlyEarning() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    chart: {
      type: "area",
      height: 80,
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
      <CardBox className="mt-[30px] overflow-hidden p-0">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h5 className="card-title">Monthly Earnings</h5>
            <div className="bg-lightprimary dark:bg-lightprimary flex h-10 w-10 items-center justify-center rounded-md">
              <img src={icon} alt="icon" />
            </div>
          </div>
          <div className="mt-1 mb-3 flex items-center gap-2">
            <h4 className="text-2xl">$6,820</h4>
            <span className="bg-lightsuccess dark:bg-lightsuccess text-success flex items-center justify-center rounded-full p-1">
              <Icon icon="solar:arrow-left-up-outline" height={15} />
            </span>
            <p className="text-ld mb-0 text-sm">+9%</p>
          </div>
        </div>
        <Chart
          options={ChartData}
          series={ChartData.series}
          type="area"
          height="80px"
          width="100%"
        />
      </CardBox>
    </>
  );
}
