import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Booking - 2024",
      fontSize: 20,
      padding: 10, // Padding between the title and the chart
    },
    axisX: {
      valueFormatString: "MMM",
      labelFontSize: 14,
    },
    axisY: {
      title: "Number of Bookings",
      titleFontSize: 16,
      labelFontSize: 14,
      prefix: "",
      padding: 10, // Padding between Y-axis title and chart
      gridThickness: 0, // Remove horizontal grid lines
    },
    data: [
      {
        yValueFormatString: "#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2024, 0), y: 15 },
          { x: new Date(2024, 1), y: 32 },
          { x: new Date(2024, 2), y: 44 },
          { x: new Date(2024, 3), y: 90 },
          { x: new Date(2024, 4), y: 20 },
          { x: new Date(2024, 5), y: 69 },
          { x: new Date(2024, 6), y: 64 },
          { x: new Date(2024, 7), y: 70 },
          { x: new Date(2024, 8), y: 53 },
          { x: new Date(2024, 9), y: 23 },
          { x: new Date(2024, 10), y: 90 },
          { x: new Date(2024, 11), y: 45 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart;
