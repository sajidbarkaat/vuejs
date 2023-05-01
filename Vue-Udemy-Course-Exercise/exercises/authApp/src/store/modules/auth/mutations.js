export default{
  setUser(state, payload){
    state.idToken = payload.idToken
    state.userId = payload.userId 
    // state.expiresIn = payload.expiresIn
  }
}