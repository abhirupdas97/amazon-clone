import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLtt5FjhCkZ2JdvLSO0fS88qUcXXwSomM",
    authDomain: "clone-49442.firebaseapp.com",
    projectId: "clone-49442",
    storageBucket: "clone-49442.appspot.com",
    messagingSenderId: "470376963479",
    appId: "1:470376963479:web:9d6ba4a1f096ef298e38d2",
    measurementId: "G-B2DVZJ4MMR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };