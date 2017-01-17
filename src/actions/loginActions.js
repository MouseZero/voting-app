module.exports = {
  changeToken(token){
    return {type: 'CHANGE_TOKEN', token};
  },

  logout(token){
    return {type: 'CHANGE_TOKEN', token: ''}
  }
}
