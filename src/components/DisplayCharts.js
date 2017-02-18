import React from 'react';
import isEmpty from 'lodash.isempty';
import MyPoll from './MyPoll';

export default function DisplayCharts({charts}){
  if(charts && !isEmpty(charts)){
    return (
      <div>
        {charts.map(chartData => {
          return (
            <div>
              <h2>{chartData.title}</h2>
              {chartData.description}
              <MyPoll data={chartData.data} chartId={chartData.id}/>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        Is Empty
      </div>
    );
  }
}
