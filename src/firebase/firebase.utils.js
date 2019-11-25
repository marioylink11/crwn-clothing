import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCz7OylZbRY_uf0YcQ2EtiPAxGoOQGmZAE",
  authDomain: "crwn-db-d6932.firebaseapp.com",
  databaseURL: "https://crwn-db-d6932.firebaseio.com",
  projectId: "crwn-db-d6932",
  storageBucket: "crwn-db-d6932.appspot.com",
  messagingSenderId: "376342698346",
  appId: "1:376342698346:web:5d66a45989db117eed6d13",
  measurementId: "G-F8918N8ZGE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
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
