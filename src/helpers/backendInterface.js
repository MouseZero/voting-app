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
