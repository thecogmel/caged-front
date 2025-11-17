import { Icon } from "@iconify/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function PageImpression() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "",
        data: [20, 15, 30, 25, 10],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 100,
      type: "bar",
      sparkline: {
        enabled: true,
      },
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    colors: [
      "var(--color-lightsecondary)",
      "var(--color-lightsecondary)",
      "var(--color-secondary)",
      "var(--color-lightsecondary)",
      "var(--color-lightsecondary)",
    ],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "64%",
        distributed: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
    },
  };
  return (
    <>
      <CardBox className="mt-[30px] overflow-hidden">
        <h5 className="card-title">Page Impressions</h5>
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-6">
            <h6 className="text-xl">$456,120</h6>
            <p className="text-darklink text-xs">(Change Yesterday)</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="bg-lighterror dark:bg-lighterror text-error flex items-center justify-center rounded-full p-1">
                <Icon icon="solar:arrow-right-down-linear" height={15} />
              </span>
              <p className="text-ld mb-0 text-sm">+9%</p>
            </div>
          </div>
          <div className="col-span-6">
            <div className="-me-4">
              <Chart
                options={ChartData}
                series={ChartData.series}
                type="bar"
                height="100px"
                width="100%"
              />
            </div>
          </div>
        </div>
      </CardBox>
    </>
  );
}
