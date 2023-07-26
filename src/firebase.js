import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDI-zVE1vXQhlu4p4nSlMuqYj2QE7t9OeI",
    authDomain: "linkedin-clone-yt-d5310.firebaseapp.com",
    projectId: "linkedin-clone-yt-d5310",
    storageBucket: "linkedin-clone-yt-d5310.appspot.com",
    messagingSenderId: "838740857962",
    appId: "1:838740857962:web:d82ed7f75fe3060dc5e613"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
