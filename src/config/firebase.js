import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // aquí van las credenciales de Firebase
  apiKey: "AIzaSyANOOKj7m5gmQ7ikjHQcXMy_KW5Tr3f5Ww",
  authDomain: "my-survey-app-c9860.firebaseapp.com",
  projectId: "my-survey-app-c9860",
  storageBucket: "my-survey-app-c9860.appspot.com",
  messagingSenderId: "1062125223256",
  appId: "1:1062125223256:web:4405c2b34986fdd963b92d",
  measurementId: "G-DNXG47R3VT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseFirestore = getFirestore(app);
const firebaseAuth = getAuth();


export { app, firebaseFirestore, firebaseAuth, analytics };

