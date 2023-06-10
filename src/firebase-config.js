import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAVCx3bmHLXWEDVGgvGABfAFleyxmYNIA",
  authDomain: "blog-project-abrar.firebaseapp.com",
  projectId: "blog-project-abrar",
  storageBucket: "blog-project-abrar.appspot.com",
  messagingSenderId: "1046797567080",
  appId: "1:1046797567080:web:a7560e89859968370f67dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
