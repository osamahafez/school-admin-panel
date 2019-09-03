import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Semester Progress",
				fontFamily: 'arial',
				fontSize: 30,
				fontWeight: 'normal'
			},
			axisY: {
				title: "curriculum finished",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "week in semester",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 1 },
					{ x: 2, y: 3 },
					{ x: 3, y: 5 },
					{ x: 4, y: 11 },
					{ x: 5, y: 15 },
					{ x: 6, y: 20 },
					{ x: 7, y: 26 },
					{ x: 8, y: 36 },
					{ x: 9, y: 44 },
					{ x: 10, y: 50 },
					{ x: 11, y: 77 },
					{ x: 12, y: 90 },
					{ x: 13, y: 91 },
					{ x: 14, y: 92 },
					{ x: 15, y: 100 }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           