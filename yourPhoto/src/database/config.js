import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD34NDTuqEYvH98QzThYQLrb4yumvt0Cuk",
  authDomain: "yourphoto-a4840.firebaseapp.com",
  databaseURL: "https://yourphoto-a4840.firebaseio.com",
  projectId: "yourphoto-a4840",
  storageBucket: "yourphoto-a4840.appspot.com",
  messagingSenderId: "887997798896",
  appId: "1:887997798896:web:702b45721cefb78abaa535",
  measurementId: "G-Q97VCETKL7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

export { database };
