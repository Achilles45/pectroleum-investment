import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDuVTGLqPvzkYHxAeAjUD2GrwzDVEStNz4",
  authDomain: "pectroleum-investment.firebaseapp.com",
  databaseURL: "https://pectroleum-investment.firebaseio.com",
  projectId: "pectroleum-investment",
  storageBucket: "pectroleum-investment.appspot.com",
  messagingSenderId: "858917923659",
  appId: "1:858917923659:web:8b7a278874e335fd0596ce",
  measurementId: "G-K5SSPMRWWK"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();