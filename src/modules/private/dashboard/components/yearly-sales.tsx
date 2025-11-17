import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { TbGridDots } from "react-icons/tb";

import CardBox from "@/shared/components/card-box";

export function YearlySales() {
  const ChartData: ApexOptions = {
    series: [
      {
        name: "",
        data: [20, 15, 30, 25, 10, 15, 20],
      },
    ],

    chart: {
      toolbar: {
        show: false,
      },
      height: 275,
      type: "bar",
      fontFamily: "inherit",
      foreColor: "#adb0bb",
    },
    colors: [
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-primary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
      "var(--color-lightprimary)",
    ],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "55%",
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
      categories: [
        ["Apr"],
        ["May"],
        ["June"],
        ["July"],
        ["Aug"],
        ["Sept"],
        ["Oct"],
      ],
      axisBorder: {
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
      <CardBox>
        <div>
          <h5 className="card-title">Yearly Sales</h5>
          <p className="card-subtitle">Every month</p>
        </div>
        <div className="-ms-6 -me-4">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="bar"
            height="275px"
            width="100%"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-lightprimary dark:bg-lightprimary flex h-10 w-10 items-center justify-center rounded-md">
              <TbGridDots size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-sm">Salary</p>
              <h6 className="text-base">$36,358</h6>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-lightgray dark:bg-darkmuted flex h-10 w-10 items-center justify-center rounded-md">
              <TbGridDots size={20} className="text-darklink" />
            </div>
            <div>
              <p className="text-sm">Expance</p>
              <h6 className="text-base">$5,296</h6>
            </div>
          </div>
        </div>
      </CardBox>
    </>
  );
}
