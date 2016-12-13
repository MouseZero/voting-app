module.exports = {

  requireAuth(nextState, replace){
    // replace({
    //   pathname: "/otherpath",
    // })
  },

  login(){
    localStorage.token = "testToken";
    console.log('trying to login');
    var url = 'http://z3r0.info:3333/api/authenticate'
    var method = 'POST'
    $.ajax(url, {
      type: method,
      dataType: 'json',
      data: {
        name: 'testuser',
        password: 'password'
      },
      success: function(data, textStatus, jqXHR){
        console.log(data)
      },
      error: function(jqXHR, textStatus, errorThrown){
        try{
          throw errorThrown;
        }catch(err){
          console.log(err);
        }
      }
    });
  },

  getToken(){
    return localStorage.token;
  },

  logout(){
    delete localStorage.token
  },

  loggedIn(){
    return !!localStorage.token
  }
}
