import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBgjoxVTDz117uwvRbA15bsoa8WjDfgDTo",
    authDomain: "react-augment.firebaseapp.com",
    databaseURL: "https://react-augment.firebaseio.com",
    projectId: "react-augment",
    storageBucket: "react-augment.appspot.com",
    messagingSenderId: "316865977752",
    appId: "1:316865977752:web:6fe75d269ca53749899fed"
  };

  const fireConfig = firebase.initializeApp(firebaseConfig);
  export default fireConfig;