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
  TimeScale,
  ChartOptions,
  ChartData
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

interface DataPoint {
  x: number; // Timestamp
  y: number; // Numeric value
}

interface LineChartProps {
  data: DataPoint[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const labels = data?.map((dataPoint: DataPoint) => new Date(dataPoint.x));
  const dataValues = data?.map((dataPoint: DataPoint) => dataPoint.y);

// const chartData:ChartData = {
//   labels: labels,
//   datasets: [
//     {
//       label: 'Series',
//       data: dataValues,
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgb(164, 196, 260)',
//       pointStyle: false,
//       fill: true,
//     },
//   ],
// };

// const chartOptions:ChartOptions = {
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       enabled: true,
//       mode: 'index' as const,
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
//     mode: 'index' as const,
//     intersect: false,
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   scales: {
//     x: {
//       type: 'time',
//       display:false,
//       // time: {
//       //   unit: 'day',
//       //   displayFormats: {
//       //     day: 'MMM dd',
//       //   },
//       // },
//     },
//     y: {
//       beginAtZero: false,
//       display: false,
//     },
//   },
// };
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//  const exampleData = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
//  const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };




return (
  <div className="flex-auto h-[250px]">
    <Line data={
      {
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
      }
    } options={
      {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            mode: 'index' as const,
            intersect: false,
            callbacks: {
              title: (tooltipItem: { parsed: { x: any; }; }[]) => {
                const xValue = tooltipItem[0].parsed.x;
                const options = {
                  year: 'numeric' as const,
                  month: 'long'as const,
                  day: 'numeric'as const,
                };
                const formattedDate = new Date(xValue).toLocaleDateString('en-US', options);
                return formattedDate;
              },
              label: (tooltipItem: { formattedValue: string; }) => {
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
          mode: 'index' as const,
          intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'time',
            display:false,
            // time: {
            //   unit: 'day',
            //   displayFormats: {
            //     day: 'MMM dd',
            //   },
            // },
          },
          y: {
            beginAtZero: false,
            display: false,
          },
        },
      }
    }/>
  </div>
);
};

export default LineChart;