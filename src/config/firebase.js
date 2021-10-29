import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MESAURMENT_ID,
});

// Initialize Firebase
export const app = app.auth();
export default app;
// const analytics = getAnalytics(app);
