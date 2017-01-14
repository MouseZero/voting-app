module.exports = {

  getNewToken(name, password, cb){
    const url = 'http://z3r0.info:3333/api/authenticate';
    const method = 'POST';
    $.ajax(url, {
      type: method,
      dataType: 'json',
      data: {
        name: name,
        password: password
      },
      success: function(data){
        if(data.success){
          localStorage.token = data.token;
          cb(null, data)
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        try{
          throw errorThrown;
        }catch(err){
          cb(err);
        }
      }
    });
  },

};
