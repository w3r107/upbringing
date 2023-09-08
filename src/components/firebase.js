import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import "firebase/firestore"
// import firebase from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRAdcKCOrtQ0b0XVu-Gq55HG9sYLFFhRs",
  authDomain: "upbringing-31259.firebaseapp.com",
  databaseURL: "https://upbringing-31259-default-rtdb.firebaseio.com",
  projectId: "upbringing-31259",
  storageBucket: "upbringing-31259.appspot.com",
  messagingSenderId: "199744153619",
  appId: "1:199744153619:web:f46640e5e552500bb337e6",
  measurementId: "G-9J71MVZQ9E"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
// export default firebase
// const analytics = getAnalytics(app);

