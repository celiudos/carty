import { Box, Card, CardHeader } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const qntDeCasosPorAno = [
  {
    qnt: 10,
    mes: "jan",
  },
  {
    qnt: 5,
    mes: "fev",
  },
  {
    qnt: 30,
    mes: "mar",
  },
];

export default function WidgetChart() {
  const [chartConfig, setChartConfig] = useState<any>();
  const [chartOptions, setChartOptions] = useState<ApexCharts.ApexOptions>();

  useEffect(() => {
    setChartConfig({
      series: [
        {
          data: qntDeCasosPorAno.map((d) => d.qnt),
        },
      ],
      chart: {
        type: "line",
        height: 150,
      },
    });

    setChartOptions({
      chart: {
        toolbar: { show: false },
      },
      tooltip: {
        marker: { show: false },
        y: {
          title: {
            formatter: () => `Quantidade:`,
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: qntDeCasosPorAno.map((d) => d.mes),
      },
    });
  }, []);

  return (
    <Box sx={{ mx: 3 }} dir="ltr">
      {chartConfig ? (
        <ReactApexChart
          type={chartConfig.chart.type}
          series={chartConfig.series}
          options={chartOptions}
          height={chartConfig.chart.height}
        />
      ) : null}
    </Box>
  );
}
