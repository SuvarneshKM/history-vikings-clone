import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsYaUpFt-svckTfGfEEMZ7iNSW-CwSQMk",
  authDomain: "history-vikings-clone.firebaseapp.com",
  projectId: "history-vikings-clone",
  storageBucket: "history-vikings-clone.appspot.com",
  messagingSenderId: "1092129196945",
  appId: "1:1092129196945:web:c4a7490891d165440f2830",
  measurementId: "G-LY0CRNE6GG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;