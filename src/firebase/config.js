import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';


//here put your data from firebase
var firebaseConfig = {
    apiKey: "___________________",
    authDomain: "___________________",
    databaseURL: "___________________",
    projectId: "___________________",
    storageBucket: "___________________",
    messagingSenderId: "___________________",
    appId: "___________________",
    measurementId: "___________________"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp};