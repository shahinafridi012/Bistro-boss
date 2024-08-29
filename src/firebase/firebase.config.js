// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dSuO4jYxTwSxO4oKPokX4UBiEALYbvg",
  authDomain: "bistro-boss-21ef2.firebaseapp.com",
  projectId: "fir-demo-project",
  storageBucket: "bistro-boss-21ef2.appspot.com",
  messagingSenderId: "197885909552",
  appId: "1:197885909552:web:fe4666cca6e8e2470b2bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;