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

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShop = await userRef.get();
  console.log(userAuth);
  console.log(typeof userAuth);
  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
