import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

type Props = {
  data: [];
};

const ExpenseChart = ({ data }: Props) => {
  const options: EChartsOption = {
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["5%", "90%"],
        data: data,
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
