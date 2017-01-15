const url = 'http://z3r0.info:3333/api/authenticate';

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


  createChart(token, chartObject, cb){
    console.log('token:', token)
    console.log('chartObject', chartObject);

  }

};
