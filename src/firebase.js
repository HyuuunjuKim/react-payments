import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAw0bOAMgrjd5oYkHnBhIWRrvP2ULXkV9Y',
  authDomain: 'react-payments-2cd38.firebaseapp.com',
  projectId: 'react-payments-2cd38',
  storageBucket: 'react-payments-2cd38.appspot.com',
  messagingSenderId: '783131299191',
  appId: '1:783131299191:web:7feb5b698d6f6d23092572',
  measurementId: 'G-5LJ8WYQC91',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
