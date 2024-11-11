// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjKqosOp7p4LD5gOmuIkrKmI5ijKl_dPA",
    authDomain: "k-email-login.firebaseapp.com",
    projectId: "k-email-login",
    storageBucket: "k-email-login.firebasestorage.app",
    messagingSenderId: "937182348958",
    appId: "1:937182348958:web:170470e9f49e28de5a5d8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth