import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Graph = ({ forecast }) => {
  const currentWidth = window.innerWidth;
  const { hour } = forecast.forecast.forecastday[0];
  const labels = [];
  const graphData = [];
  const imageSource = [];
  hour.map((element) => {
    labels.push(element.time.slice(10, 17));
    graphData.push(element.temp_c.toString());
    imageSource.push(element.condition.icon);
    return 0;
  });
  const icons = [];

  for (let i = 0; i < imageSource.length; i++) {
    icons[i] = new Image();
    icons[i].src = imageSource[i];
  }

  icons[0] = "circle";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "const",
      },
      title: {
        display: true,
        text: "",
      },
    },
    elements: {
      point: {
        pointStyle: currentWidth > 700 ? icons : "",
      },
      line: { tension: "0.4" },
    },

    scales: {
      x: {
        suggestedMax: "",
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        suggestedMin: Math.min(...graphData) - 1,
        suggestedMax: Math.max(...graphData) + 1,

        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        data: graphData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        // showLine: false,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default Graph;
