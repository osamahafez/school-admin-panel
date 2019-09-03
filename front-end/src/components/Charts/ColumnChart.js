import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "Parents Feedback",
				fontFamily: 'arial',
				fontSize: 30,
				fontWeight: 'normal'
			},
			animationEnabled: true,
			exportEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Very Poor",  y: 22  },
					{ label: "Acceptable", y: 326  },
					{ label: "Good", y: 229  },
					{ label: "Very Good",  y: 45  },
					{ label: "Excellent",  y: 20  }
				]
			}
			]
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

export default ColumnChart;