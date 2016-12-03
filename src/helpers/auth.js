module.exports = {
  login(){
    localStorage.token = "testToken";
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
