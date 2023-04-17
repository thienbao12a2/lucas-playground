// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCwrZH6yljfoj3uvpLe2Tm7hgM4ghtj3so",
//   authDomain: "booking-app-aa763.firebaseapp.com",
//   projectId: "booking-app-aa763",
//   storageBucket: "booking-app-aa763.appspot.com",
//   messagingSenderId: "890179731128",
//   appId: "1:890179731128:web:0dd45cddea19b8a5897e4d",
//   measurementId: "G-29BCSXD2DW",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCkMVIAoitCgVBu7nSSIdIAtVYiSwS9K88",
  authDomain: "webprog-cfbd8.firebaseapp.com",
  projectId: "webprog-cfbd8",
  storageBucket: "webprog-cfbd8.appspot.com",
  messagingSenderId: "467026942723",
  appId: "1:467026942723:web:a42ffadcbe0591dfa9a736",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
// const citiesCol = collection(db, "users");
// const data = await getDocs(citiesCol);
// console.log(data);
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  console.log(name, email, password);
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    alert("123", err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const database = getDatabase(app);
