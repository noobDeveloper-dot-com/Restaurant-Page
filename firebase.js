// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh240TAWOCpdHhzsyGTW_VSF_b-x7_ynE",
  authDomain: "nummy-foodies.firebaseapp.com",
  projectId: "nummy-foodies",
  storageBucket: "nummy-foodies.appspot.com",
  messagingSenderId: "955832082539",
  appId: "1:955832082539:web:2036cee6454048f018912e",
  measurementId: "G-QQW4JSSBXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}