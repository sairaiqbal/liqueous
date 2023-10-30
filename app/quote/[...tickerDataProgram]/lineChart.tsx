// import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';
// import { Chart, registerables } from 'chart.js';


import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
  TimeScale
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
  TimeScale
);


const LineChart = ({ data}:any) => {
  console.log( data);
 
const labels = data?.map((dataPoint: { x: string | number | Date; }) => new Date(dataPoint.x));
const dataValues = data?.map((dataPoint: { y: any; }) => dataPoint.y);

const chartData = {
  labels: labels,
  datasets: [
    {
      label: 'Series',
      data: dataValues,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(164, 196, 260)',
      pointStyle: false,
      fill: true,
    },
  ],
};

// const chartOptions = {
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       enabled: true,
//       mode: 'index',
//       intersect: false,
//       callbacks: {
//         title: (tooltipItem: { parsed: { x: any; }; }[]) => {
//           const xValue = tooltipItem[0].parsed.x;
//           const options = {
//             year: 'numeric' as const,
//             month: 'long'as const,
//             day: 'numeric'as const,
//           };
//           const formattedDate = new Date(xValue).toLocaleDateString('en-US', options);
//           return formattedDate;
//         },
//         label: (tooltipItem: { formattedValue: string; }) => {
//           return 'Close: $' + tooltipItem.formattedValue;
//         },
//         labelColor: () => {
//           return {
//             borderColor: 'rgba(54, 162, 235, 0.2)',
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderWidth: 2,
//             borderRadius: 6,
//           };
//         },
//       },
//     },
//   },
//   hover: {
//     mode: 'index',
//     intersect: false,
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       type: 'time',
//       display:false,
//       time: {
//         unit: 'day',
//         displayFormats: {
//           day: 'MMM dd',
//         },
//       },
//     },
//     y: {
//       beginAtZero: false,
//       display: false,
//     },
//   },
// };
const chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      mode: 'index' as const, // Correct the type here
      intersect: false,
      callbacks: {
        title: (tooltipItem: { parsed: { x: any }[] }) => {
          const xValue = tooltipItem[0].parsed.x;
          const options = {
            year: 'numeric' as const,
            month: 'long' as const,
            day: 'numeric' as const,
          };
          const formattedDate = new Date(xValue).toLocaleDateString('en-US', options);
          return formattedDate;
        },
        label: (tooltipItem: { formattedValue: string }) => {
          return 'Close: $' + tooltipItem.formattedValue;
        },
        labelColor: () => {
          return {
            borderColor: 'rgba(54, 162, 235, 0.2)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            borderRadius: 6,
          };
        },
      },
    },
  },
  hover: {
    mode: 'index' as const, // Correct the type here
    intersect: false,
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      type: 'time',
      display: false,
      time: {
        unit: 'day',
        displayFormats: {
          day: 'MMM dd',
        },
      },
    },
    y: {
      beginAtZero: false,
      display: false,
    },
  },
};


return (
  <div className="flex-auto h-[250px]">
    {/* <Line data={chartData} options={chartOptions} /> */}
  </div>
);
};

export default LineChart;
