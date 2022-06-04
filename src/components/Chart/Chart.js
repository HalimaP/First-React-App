import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    let totalMaximum;
    if(props.dataPoints){
        const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
        totalMaximum = Math.max(...dataPointValues);
    }
   
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
