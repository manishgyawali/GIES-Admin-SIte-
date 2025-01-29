import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [12, 7, 17, 10, 2, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)', 
        'rgba(54, 162, 235, 0.8)', // Brighter blue
        'rgba(255, 206, 86, 0.8)', // Brighter yellow
        'rgba(75, 192, 192, 0.8)', // Brighter green
        'rgba(153, 102, 255, 0.8)', // Brighter purple
        'rgba(255, 159, 64, 0.8)', // Brighter orange
      ],
      borderWidth: 0, 
    },
  ],
};

// App component rendering the PolarArea chart
const PieChart = () => (
  <div>
    <PolarArea data={data} />
  </div>
);

export default PieChart;
