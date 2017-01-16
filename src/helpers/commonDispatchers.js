import { setChartAction } from '../actions/chartActions.js'
import { getCharts } from '../helpers/backendInterface.js'

module.exports = {

  updateCharts: (token, dispatch) => {
      console.log('updateChart', token)
      getCharts(token)
      .then(data => {
        dispatch(setChartAction(data.charts));
      })
      .catch(err => console.log(err))
    }

}
