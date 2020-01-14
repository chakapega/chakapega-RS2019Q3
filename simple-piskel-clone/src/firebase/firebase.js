import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqBReUdUMkdD7HE-KPK4OlRHVWXEdT0yA',
  authDomain: 'chakapega-spc.firebaseapp.com',
  databaseURL: 'https://chakapega-spc.firebaseio.com',
  projectId: 'chakapega-spc',
  storageBucket: 'chakapega-spc.appspot.com',
  messagingSenderId: '1077172806222',
  appId: '1:1077172806222:web:ea6c48aa97a599a19d591f'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
