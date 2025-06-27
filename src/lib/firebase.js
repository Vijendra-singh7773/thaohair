// @ts-nocheck
import { initializeApp } from "firebase/app";
import { writable } from 'svelte/store';



import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqhUt9Ab8Rj7C3EPS86mS79A7IJ5fJAQ4",
  authDomain: "laptop-app-80207.firebaseapp.com",
  projectId: "laptop-app-80207",
  storageBucket: "laptop-app-80207.firebasestorage.app",
  messagingSenderId: "1079421545009",
  appId: "1:1079421545009:web:6dc5543124aca5aa4a4310",
  measurementId: "G-03NX7G0QK4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const user = writable(null);
export {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  provider,
  db,
};

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user.set({
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName || 'User',
    });
  } else {
    user.set(null);
  }
});

export const logout = () => {
  signOut(auth);
};