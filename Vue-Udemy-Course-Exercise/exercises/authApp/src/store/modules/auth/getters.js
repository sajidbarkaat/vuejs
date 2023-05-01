export default{
    userId(state) {
      return state.userId;
    },
    idToken(state){
      return state.idToken
    },
    isAuth(state){
      return !!state.idToken
    }
  
}