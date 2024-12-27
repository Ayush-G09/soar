import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

const ExpenseChart = () => {
  const options: EChartsOption = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["5%", "90%"],
        data: [
          { value: 30, name: "Entertainment", itemStyle: { color: "#343C6A" } },
          { value: 15, name: "Bill Expense", itemStyle: { color: "#FC7900" } },
          { value: 35, name: "Other", itemStyle: { color: "#232323" } },
          { value: 20, name: "Investment", itemStyle: { color: "#396AFF" } },
        ],
        itemStyle: {
          borderWidth: 5,
          borderColor: "#fff",
        },
        label: {
          show: true,
          position: "inside",
          formatter: function (params: any) {
            return (
              "{c| " +
              params.percent.toFixed(0) +
              "%}" +
              "\n" +
              "{b| " +
              params.name +
              "}"
            );
          },
          rich: {
            c: {
              color: "#fff",
              fontSize: 12,
              fontWeight: 600,
            },
            b: {
              color: "#fff",
              fontSize: 10,
              fontWeight: 500,
            },
          },
          align: "center",
          verticalAlign: "middle",
          offset: [5, 0],
        },
      },
    ],
  };

  return (
    <ReactECharts option={options} style={{ height: "90%", width: "100%" }} />
  );
};

export default ExpenseChart;
