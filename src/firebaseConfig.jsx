// firebaseConfig.jsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAqW1EEcOLd8Wa7qEpHczTDmOGhM_9U-sQ",
  authDomain: "hektto-ebc9f.firebaseapp.com",
  projectId: "hektto-ebc9f",
  storageBucket: "hektto-ebc9f.firebasestorage.app",
  messagingSenderId: "642527717301",
  appId: "1:642527717301:web:227a7c87b9b0d90d84dbfc",
  measurementId: "G-VJ1ND5PYJW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth }; // Export auth so that you can use it in other files like CreateAccountPage

