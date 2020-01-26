import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBk3ne5prIhDqAsICDnKsv-zsRCW2jP4vo",
  authDomain: "crwn-db-3b50f.firebaseapp.com",
  databaseURL: "https://crwn-db-3b50f.firebaseio.com",
  projectId: "crwn-db-3b50f",
  storageBucket: "crwn-db-3b50f.appspot.com",
  messagingSenderId: "95913453249",
  appId: "1:95913453249:web:81856b8f9c354471bc5640",
  measurementId: "G-M0NGQNK52K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
