import firebase from 'firebase'

const config = { 
  apiKey: 'AIzaSyAjDuYRjmwTE0Zhfrff5OEgTS4ZOnUy9Bw',
  authDomain: 'vue-http-demo-39ae2.firebaseapp.com',
  databaseURL: 'https://vue-http-demo-39ae2-default-rtdb.firebaseio.com',
  projectId: 'vue-http-demo-39ae2',
  storageBucket: 'vue-http-demo-39ae2.appspot.com',
  messagingSenderId: '975603472489',
  appId: '1:975603472489:web:e36818d049d780a240eaf8',
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;