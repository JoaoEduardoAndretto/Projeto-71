import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD9fXEYSWFmEBKZJIXEYywKUJcG3IV_e78",
  authDomain: "projeto-71-8b151.firebaseapp.com",
  projectId: "projeto-71-8b151",
  storageBucket: "projeto-71-8b151.appspot.com",
  messagingSenderId: "760969723099",
  appId: "1:760969723099:web:d1243cfb85b533b4b360fe",
  measurementId: "G-NN4RKQX6N1"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
