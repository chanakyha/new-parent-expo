import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIdGol04HxzfG1zjGQQLbHLQIlNBjPqCQ",
  authDomain: "project-hosp.firebaseapp.com",
  projectId: "project-hosp",
  storageBucket: "project-hosp.appspot.com",
  messagingSenderId: "11176078535",
  appId: "1:11176078535:web:a0fe23f551a5565f0fa2e2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
