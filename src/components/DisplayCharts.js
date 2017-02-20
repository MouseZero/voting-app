import React, { PropTypes } from 'react';
import isEmpty from 'lodash.isempty';
import MyPoll from './MyPoll';
import { Link } from 'react-router';

export default function DisplayCharts({charts}){
  if(charts && !isEmpty(charts)){
    return (
      <div>
        {charts.map(chartData => {
          return (
            <div key={chartData.id}>
              <h2>
                <Link to={"poll/" + chartData.id}>
                {chartData.title}
                </Link>
              </h2>
              {chartData.description}
              <br />
              <Link to={"poll/" + chartData.id}>
              <MyPoll data={chartData.data} chartId={chartData.id}/>
              </Link>
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
DisplayCharts.propTypes = {
  charts: PropTypes.array
};
