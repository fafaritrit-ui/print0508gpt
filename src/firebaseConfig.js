import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAowm2qfnTNKNy7jV3xRDn25vwvJAj8X3k",
  authDomain: "testpost-da1ab.firebaseapp.com",
  projectId: "testpost-da1ab",
  storageBucket: "testpost-da1ab.firebasestorage.app",
  messagingSenderId: "916388427815",
  appId: "1:916388427815:web:90e0c8d27c7f6347f73602",
  measurementId: "G-R4KDPY932D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };