import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPvcxM4tL5kE9Yvlumu-uVrvpvYf6160U",
  authDomain: "cookholic-d40cf.firebaseapp.com",
  projectId: "cookholic-d40cf",
  storageBucket: "cookholic-d40cf.appspot.com",
  messagingSenderId: "1062966438275",
  appId: "1:1062966438275:web:de2dbf1b1b7ae29db1aeb6",
  measurementId: "G-GLLQTK1N8N",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
