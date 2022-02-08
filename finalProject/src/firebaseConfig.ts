import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6bMNCvy5iqLmd6W-3FeboMvzzfZZGzVc",
  authDomain: "final-project-eugene-sam.firebaseapp.com",
  projectId: "final-project-eugene-sam",
  storageBucket: "final-project-eugene-sam.appspot.com",
  messagingSenderId: "835720941179",
  appId: "1:835720941179:web:c97a43ca382a76373b9cde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
    }
    export function signOut(): void {
    auth.signOut();
    }