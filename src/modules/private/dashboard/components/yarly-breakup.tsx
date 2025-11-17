import { Icon } from "@iconify/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function YarlyBreakup() {
  const ChartData: ApexOptions = {
    series: [38, 40, 25],
    labels: ["2023", "2022", "2024"],
    chart: {
      height: 150,
      type: "donut",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
        },
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
    colors: [
      "var(--color-primary)",
      "var(--color-lightprimary)",
      "var(--color-lightsecondary)",
    ],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  return (
    <>
      <CardBox>
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-6">
            <h5 className="card-title mb-4">Yearly Breakup</h5>
            <h6 className="text-xl">$36,358</h6>
            <div className="mt-1 mb-3 flex items-center gap-2">
              <span className="bg-lightsuccess dark:bg-lightsuccess text-success flex items-center justify-center rounded-full p-1">
                <Icon icon="solar:arrow-left-up-outline" height={15} />
              </span>
              <p className="text-ld mb-0 text-sm">+9%</p>
              <p className="mb-0 text-sm">last year</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="bg-primary h-2 w-2 rounded-full"></span>
                <span className="text-xs">2023</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-lightsecondary h-2 w-2 rounded-full"></span>
                <span className="text-xs">2024</span>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="donut"
              height="150px"
              width="100%"
            />
          </div>
        </div>
      </CardBox>
    </>
  );
}
