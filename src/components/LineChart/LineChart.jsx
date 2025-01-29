import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 2000;
class LineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: ""
			},
			data: [{
				type: "line",
				dataPoints : dps
			}],
    
      axisX: {
        gridThickness: 0, // Removes horizontal grid lines
      },
      axisY: {
        gridThickness: 0, // Removes vertical grid lines
      },
      data: [
        {
          type: "line",
          dataPoints: dps,
          lineColor: "blue", // Blue main data line
          lineThickness: 3, // Makes line more visible
          markerType: "circle",
          markerSize: 8,
          markerBorderColor: "blue", // Border color for points
          markerBorderThickness: 3,
          bevelEnabled: true, // Enables shadow effect
          shadowColor: "rgba(0, 0, 255, 0.5)", // Blue shadow
          shadowBlur: 10,
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default LineChart; 