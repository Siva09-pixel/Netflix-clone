// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXT3bMsr6764PUOQM7jeg2IKUL7WlDUiE",
  authDomain: "netflix-clone-9d807.firebaseapp.com",
  projectId: "netflix-clone-9d807",
  storageBucket: "netflix-clone-9d807.appspot.com",
  messagingSenderId: "757428899653",
  appId: "1:757428899653:web:edfecb56c2ec601038382c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export default app
export { db, auth } 