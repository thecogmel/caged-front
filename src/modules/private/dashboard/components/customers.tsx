import { Icon } from "@iconify/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function Customers() {
  const ChartData: ApexOptions = {
    chart: {
      id: "customers",
      type: "area",
      height: 80,
      sparkline: {
        enabled: true,
      },
      group: "customers",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },

    series: [
      {
        name: "",
        color: "var(--color-secondary)",
        data: [30, 25, 35, 20, 30, 40],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.1,
        opacityTo: 0,
        stops: [20, 180],
      },
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  return (
    <>
      <CardBox className="overflow-hidden p-0">
        <div className="p-6">
          <p className="text-subtitle">Customers</p>
          <h5 className="text-xl">36,358</h5>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="bg-lighterror dark:bg-lighterror text-error flex items-center justify-center rounded-full p-1">
              <Icon icon="solar:arrow-right-down-linear" height={15} />
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
