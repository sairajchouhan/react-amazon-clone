import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAXBkxApIp6QKS-xjAGjF2zngwrY9CMuoI',
  authDomain: 'react--clone-b3bcc.firebaseapp.com',
  databaseURL: 'https://react--clone-b3bcc.firebaseio.com',
  projectId: 'react--clone-b3bcc',
  storageBucket: 'react--clone-b3bcc.appspot.com',
  messagingSenderId: '624928859500',
  appId: '1:624928859500:web:7c1290eeb34c5e18c13f49',
  measurementId: 'G-3XJ4WXZHSQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
