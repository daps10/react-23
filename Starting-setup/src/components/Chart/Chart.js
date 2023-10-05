import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  return <div className='Chart'>
    {
      props.datapoints.map((datapoint) => (
        <ChartBar 
          key={datapoint.label}
          value={datapoint.value} 
          maxValue={null} 
          label={datapoint.label}
        />
      ))
    };
  </div>;
};

export default Chart;