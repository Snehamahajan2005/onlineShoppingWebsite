// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5z71k9Nhz0KFlb-8Yq4v4635OP8IoK7I",
  authDomain: "onlineshoppingwebsite-47512.firebaseapp.com",
  projectId: "onlineshoppingwebsite-47512",
  storageBucket: "onlineshoppingwebsite-47512.firebasestorage.app",
  messagingSenderId: "354706862795",
  appId: "1:354706862795:web:99c4dcd711e306757e214e",
  measurementId: "G-SBRH0R2P7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);