import firebase from "firebase";
require("@firebase/firestore");


  var firebaseConfig = {
    apiKey: "AIzaSyA-4Nc3UONcf-jCTXs8XaKycnWmSMf2jeE",
    authDomain: "book-santa-a6aaf.firebaseapp.com",
    databaseURL: "https://book-santa-a6aaf.firebaseio.com",
    projectId: "book-santa-a6aaf",
    storageBucket: "book-santa-a6aaf.appspot.com",
    messagingSenderId: "851477653931",
    appId: "1:851477653931:web:620a37b5c97017d0258aee",
    measurementId: "G-6VLMJ6SGPW"
  };
 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
