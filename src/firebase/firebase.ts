import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB4Tt3r6emXGw1d9-ITKIy0LV8MOdpBxOQ",
  authDomain: "science-on-the-road.firebaseapp.com",
  projectId: "science-on-the-road",
  storageBucket: "science-on-the-road.firebasestorage.app",
  messagingSenderId: "982485359228",
  appId: "1:982485359228:web:a056d8327ce3f44ee147f9",
  measurementId: "G-J299613GBM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
