import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

const ActivityChart = () => {
  const options: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Deposit", "Withdraw"],
      icon: "circle",
      right: "10%",
    },
    grid: {
      top: "20%",
      bottom: "0%",
      left: "5%",
      right: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        axisLine: { show: false },
        axisTick: { show: false },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Withdraw",
        type: "bar",
        data: [480, 340, 320, 480, 150, 390, 400],
        itemStyle: {
          color: "#232323",
          borderRadius: [20, 20, 20, 20],
        },
        barWidth: "20%",
      },
      {
        name: "Deposit",
        type: "bar",
        data: [240, 130, 270, 380, 230, 230, 340],
        itemStyle: {
          color: "#396AFF",
          borderRadius: [20, 20, 20, 20],
        },
        barWidth: "20%",
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "90%", width: "100%" }} />
  );
};

export default ActivityChart;
