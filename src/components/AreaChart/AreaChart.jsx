import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class AreaChart extends Component {
  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: ""
      },
      axisY: {
        title: "",
        gridThickness: 0, // Removes vertical grid lines
      },
      axisX: {
        gridThickness: 0, // Removes horizontal grid lines
      },
      data: [
        {
          type: "area",
          xValueFormatString: "YYYY",
          yValueFormatString: "#,##0.## ",
          lineColor: "#F7B924",
          color: "#FDF1D3",
          markerBorderColor: "#F7B924", // Custom color
          fillOpacity: 0.7, // Controls transparency
          dataPoints: [
            { x: new Date(2020, 0), y: 7 },
            { x: new Date(2019, 0), y: 5 },
            { x: new Date(2018, 0), y: 8 },

            { x: new Date(2017, 0), y: 2 },
            { x: new Date(2016, 0), y: 4.3 },
            { x: new Date(2015, 0), y: 6 },
            { x: new Date(2014, 0), y: 2.3 },
            { x: new Date(2013, 0), y: 4.5 },
            { x: new Date(2012, 0), y: 3.8 },
            { x: new Date(2011, 0), y: 0.1 }
          ]
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default AreaChart;
