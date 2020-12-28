import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCMgQyFr3SnL2BALFncBv7eqEbRnVV3lDo",
  authDomain: "react-todo-n3.firebaseapp.com",
  databaseURL: "https://react-todo-n3.firebaseio.com",
  projectId: "react-todo-n3",
  storageBucket: "react-todo-n3.appspot.com",
  messagingSenderId: "234408560620",
  appId: "1:234408560620:web:f8bf4a1cf93c98aa0562c9",
};

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
