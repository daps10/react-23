import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const datapointsValues = props.datapoints.map(datapoint => datapoint.value);
  const totalMaximum = Math.max(...datapointsValues);
  
  return <div className='chart'>
    {
      props.datapoints.map((datapoint) => (
        <ChartBar 
          key={datapoint.label}
          value={datapoint.value} 
          maxValue={totalMaximum} 
          label={datapoint.label}
        />
      ))
    };
  </div>;
};

export default Chart;