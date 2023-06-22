import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyAAf5-Wq4pnFYYCi7LyceZhl4tdqSN_z7s",
    authDomain: "netflix-clone-cb234.firebaseapp.com",
    projectId: "netflix-clone-cb234",
    storageBucket: "netflix-clone-cb234.appspot.com",
    messagingSenderId: "567863334361",
    appId: "1:567863334361:web:ea32bd876c0de1500475c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;