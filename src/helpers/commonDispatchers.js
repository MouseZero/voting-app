import { setChartAction } from '../actions/chartActions';
import { getCharts } from '../helpers/backendInterface';
import { log, LOW } from '../helpers/log';

function updateCharts (token, dispatch){
  getCharts(token)
    .then(data => {
      dispatch(setChartAction(data.charts));
    })
    .catch(err => log(err, LOW));
}

export default {updateCharts};
