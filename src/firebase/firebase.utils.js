import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTiV4xKD87dwdYhjgTZugYyQwZhkV9uQE",
  authDomain: "e-commerce-app-db-94474.firebaseapp.com",
  databaseURL: "https://e-commerce-app-db-94474.firebaseio.com",
  projectId: "e-commerce-app-db-94474",
  storageBucket: "e-commerce-app-db-94474.appspot.com",
  messagingSenderId: "1065487113885",
  appId: "1:1065487113885:web:97200db986aaef1f03fe74",
  measurementId: "G-RPTG5CWMGS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
