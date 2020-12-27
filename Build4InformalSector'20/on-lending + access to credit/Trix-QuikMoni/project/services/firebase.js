import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB5yfPviY89K9Ga_S_5DRlGiHMWNWKmKMI",
    authDomain: "quikmoni-app.firebaseapp.com",
    projectId: "quikmoni-app",
    storageBucket: "quikmoni-app.appspot.com",
    messagingSenderId: "422121301616",
    appId: "1:422121301616:web:85d6e3417fa9fc15bfb6b5",
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  // firebase.auth().settings.appVerificationDisabled = true
  // firebase.auth().settings.appVerificationDisabledForTesting = true
}

export default firebase;
