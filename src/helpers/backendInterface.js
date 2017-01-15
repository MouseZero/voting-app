const baseUrl = 'http://localhost:3333/api/';

module.exports = {

  getNewToken: (name, password) => {
    return new Promise((resolve, reject)=>{
      $.ajax((baseUrl + 'authenticate'), {
        type: 'POST',
        dataType: 'json',
        data: {
          name: name,
          password, password
        },

        success: function(data){
          if(data.success)
            resolve(data);
          reject(data);
        },

        error: function(){
          reject('Could not log-in. Server could be down');
        }
      });
    })
  },

  createChart: (token, chart) => {
    return new Promise((resolve, reject) => {
      console.log('token', token);
      console.log('chart', chart);
      $.ajax((baseUrl + 'create/chart'), {
        type: 'POST',
        dataType: 'json',
        data: {
          title: chart.title,
          desc: chart.desc,
          data: JSON.stringify(chart.points)
        },
        beforeSend: function (jqXHR){
          jqXHR.setRequestHeader('x-access-token', token);
          jqXHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
      })
    });
  }

};
