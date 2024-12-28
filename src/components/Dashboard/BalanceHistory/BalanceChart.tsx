import React from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

type Props = {
  date: string[];
  data: number[];
};

const BalanceChart = ({ date, data }: Props) => {
  const options: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
      formatter: (params: any) => {
        const [point] = params;
        return `${point.axisValueLabel}: ${point.data}`;
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#ccc",
        },
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#ccc",
        },
      },
    },
    grid: {
      top: "10%",
      bottom: "0%",
      left: "5%",
      right: "5%",
      containLabel: true,
    },
    series: [
      {
        data: [150, 400, 450, 780, 220, 550, 600],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#1814F3",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(45, 96, 255, 0.25)",
              },
              {
                offset: 1,
                color: "rgba(45, 96, 255, 0)",
              },
            ],
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "90%", width: "100%" }} />
  );
};

export default BalanceChart;
