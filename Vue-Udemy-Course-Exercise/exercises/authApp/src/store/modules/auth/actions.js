let timer = null;
export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    console.log('working'); 
    const mode = payload.mode;
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhBIVRF81Azjj9aGvgbOzC-NRxlw9VaIQ`;
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhBIVRF81Azjj9aGvgbOzC-NRxlw9VaIQ`;
    }

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhBIVRF81Azjj9aGvgbOzC-NRxlw9VaIQ`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.pass,
          returnSecureToken: true,
        }),
      }
    );
    const expiresIn = +response.expiresIn * 1000;
    // const expiresIn = 5;
    const expirationDate = new Date().getTime() + expiresIn;
    localStorage.setItem('token', response.idToken);
    localStorage.setItem('id', response.localId);
    localStorage.setItem('expiresIn', response.localId);
    if(expiresIn < 0){
      return
    }
    timer = setTimeout(function () {
      context.dispatch('logout');
    }, expiresIn);

    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(
        resData.error.message || 'Failed To Authenticate.'
      );
      throw error;
    }
    // console.log(resData.idToken);
    context.commit('setUser', {
      idToken: resData.idToken,
      userId: resData.localId,
      // expiresIn: expirationDate,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token && id) {
      context.commit('setUser', {
        idToken: token,
        userId: id,
        expiresIn: null,
      });
    } 
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('id ');
    localStorage.removeItem('expiresIn');

    clearTimeout(timer)
    context.commit('setUser', {
      userId: null,
      expiresIn: null,
      idToken: null,
    });
  },
};
