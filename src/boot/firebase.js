/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const firebase = require('firebase/app');
import { firebase } from '@firebase/app';

import '@firebase/firestore';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBn0IMRFzxed4Eq_3yifffn81wazUB7zvA',
  authDomain: 'dinojuice-26ea5.firebaseapp.com',
  projectId: 'dinojuice-26ea5',
  storageBucket: 'dinojuice-26ea5.appspot.com',
  messagingSenderId: '925430254013',
  appId: '1:925430254013:web:1ee6393ded446fe7d5aad4',
  measurementId: 'G-B5HTX4MYF0'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const db = firebase.firestore();

export { firebaseAuth, db };
