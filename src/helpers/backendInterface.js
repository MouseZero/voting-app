const baseUrl = 'http://z3r0.info:3333/api/';

module.exports = {

  getNewToken: (name, password) => {
    return new Promise((resolve, reject)=>{
      $.ajax((baseUrl + 'authenticate'), {
        type: 'POST',
        dataType: 'json',
        data: {
          name: name,
          password
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
    });
  },

  createChart: (token, chart) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'create/chart'), {
        type: 'POST',
        dataType: 'json',
        data: {
          title: chart.title,
          desc: chart.desc,
          data: JSON.stringify(chart.points)
        },

        success: function(data){
          data.success && resolve(data);
          reject(data.message);
        },

        error: function(){
          reject('Could not create chart. Server could be down');
        },

        beforeSend: function (jqXHR){
          jqXHR.setRequestHeader('x-access-token', token);
          jqXHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
      });
    });
  },

  getCharts: (token) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'charts'), {
        type: 'GET',
        dataType: 'json',
        headers: {
          'x-access-token': token
        },
        success: function(data){
          data.success && resolve(data);
          reject(data.message || 'Did not get chart data from request to service');
        },
        error: (jqXHR, text, errorThrown) => {
          reject('Error trying to get polls from RESTful service');
        }
      });
    });
  },

  getChart: (token, pollId) => {
    console.log('backendInterface got this as a token: ', token);
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'chart'), {
        type: 'GET',
        dataType: 'json',
        data: {
          chartId: pollId
        },
        headers: {
          'x-access-token': token
        },
        success: function(data){
          data.success && resolve(data);
          reject(data.message || 'Did not get chart data from request to service');
        },
        error: (jqXHR, text, errorThrown) => {
          reject('Error trying to get polls from RESTful service');
        }
      });
    });
  }

};
