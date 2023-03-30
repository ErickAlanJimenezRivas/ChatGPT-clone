import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv6Ak32NjYzKJ0jg4Pkkh2uIksYUOCw0s",
  authDomain: "chatgtp-72d1f.firebaseapp.com",
  projectId: "chatgtp-72d1f",
  storageBucket: "chatgtp-72d1f.appspot.com",
  messagingSenderId: "484206464354",
  appId: "1:484206464354:web:e8d186b803635e669a703b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };