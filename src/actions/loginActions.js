module.exports = {
  changeToken(token){
    return {type: 'CHANGE_TOKEN', token};
  },

  logout(){
    return {type: 'CHANGE_TOKEN', token: ''};
  }
};
