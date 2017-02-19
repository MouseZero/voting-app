const baseUrl = 'http://localhost:3333/api/';

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
        error: () => {
          reject('Error trying to get polls from RESTful service');
        }
      });
    });
  },

  getLatestCharts: () => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'latestcharts'), {
        type: 'GET',
        dataType: 'json',
        success: function(data){
          data.success && resolve(data);
          reject(data.message || 'Did no get chart data from request to service');
        },
        error: () => {
          reject('Error trying to get latest polls from RESTful service');
        }
      });
    });
  },

  vote: (chartid, votefor) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'vote'), {
        type: 'GET',
        dataType: 'json',
        data: {
          chartid,
          votefor
        },
        success: function(data){
          data.success && resolve(data);
          reject(data.message || 'Voting did not work');
        },
        error: () => {
          reject('Error trying to talk to the RESTful service');
        }
      });
    });
  },

  addAnswer: (token, chartid, newanswer) => {
    console.log('token from backendInterface', token);
    console.log(chartid)
    console.log(newanswer)
    return new Promise((resolve, reject) => {
      $.ajax(
        (baseUrl + 'add/answer'),
        {
          type: 'POST',
          dataType: 'json',
          data: {
            chartid,
            newanswer
          },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: function(data){
            data.success && resolve(data);
            reject(data.message || 'Answer addition did not work');
          },
          error: () => {
            reject('Error trying to talk to the RESTful service');
          },
          beforeSend: function (jqXHR){
            console.log(token);
            jqXHR.setRequestHeader('x-access-token', token);
            jqXHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          }
        }
      );
    });
  },

  getChart: (pollId) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'chart'), {
        type: 'GET',
        dataType: 'json',
        data: {
          chartId: pollId
        },
        success: function(data){
          data.success && resolve(data);
          reject(data.message || 'Did not get chart data from request to service');
        },
        error: () => {
          reject('Error trying to get polls from RESTful service');
        }
      });
    });
  },

  deleteChart: (token, id) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'delete/chart'), {
        type: 'DELETE',
        dataType: 'json',
        data: {
          chartId: id
        },
        headers: {
          'x-access-token': token,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(data){
          data.success && resolve(data);
          reject('Connected to server but could not delete ', id);
        },
        error: () => {
          reject('Error trying to delete polls from RESTful service');
        }
      });
    });
  },

  createUser: (name, password) => {
    return new Promise((resolve, reject) => {
      $.ajax((baseUrl + 'create/user'), {
        type: 'POST',
        dataType: 'json',
        data: { name, password },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function(data){
          data.success && resolve(data);
          reject('Connected to server but could not create the user ' + name);
        },
        error: () => {
          reject('Error trying to create the user from the RESTful serivce (is the server up?)');
        }
      });
    });
  }

};
