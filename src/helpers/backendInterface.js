const url = 'http://localhost:3333/api/authenticate';

module.exports = {

  getNewToken: (name, password) => {
    return new Promise((resolve, reject)=>{
      $.ajax(url, {
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
      $.ajax(url, {
        type: 'POST',
        dataType: 'json',
        data: {
          title: chart.title,
          desc: chart.desc,
          data: chart.points
        },
        beforeSend: function (jqXHR){
          jqXHR.setRequestHeader('x-access-token', token);
          jqXHR.setRequestHeader('Access-Control-Allow-Origin', '*');
        }
      })
    });
  }

};
