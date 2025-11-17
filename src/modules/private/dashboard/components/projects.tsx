import { Icon } from "@iconify/react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

import CardBox from "@/shared/components/card-box";

export function Projects() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "",
        data: [4, 10, 9, 7, 9, 10],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 75,
      type: "bar",
      sparkline: {
        enabled: true,
      },
      fontFamily: "inherit",
      foreColor: "#adb0bb",
      offsetX: -5,
    },
    colors: [
      "var(--color-primary)",
      "var(--color-primary)",
      "var(--color-primary)",
      "var(--color-primary)",
      "var(--color-primary)",
      "var(--color-primary)",
    ],
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: "40%",
        distributed: true,

        borderRadiusApplication: "end",
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
      <CardBox className="overflow-hidden">
        <div>
          <p className="text-subtitle">Projects</p>
          <h5 className="text-xl">78,298</h5>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="bg-lightsuccess dark:bg-lightsuccess text-success flex items-center justify-center rounded-full p-1">
              <Icon icon="solar:arrow-left-up-outline" height={15} />
            </span>
            <p className="text-ld mb-0 text-sm">+9%</p>
          </div>
        </div>

        <div className="rounded-bars mt-2">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="bar"
            height="75px"
            width="100%"
          />
        </div>
      </CardBox>
    </>
  );
}
