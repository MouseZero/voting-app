// export function changeToken(token){
//   return {type: 'CHANGE_TOKEN', token};
// }

module.exports = {
  changeToken(token){
    return {type: 'CHANGE_TOKEN', token};
  },

  addChart(chartObject){
    const {id, title, desc, points } = chartObject;
    return {
      type: 'ADD_CHART',
      chart: { id, title, desc, points }
    }
  }
}
