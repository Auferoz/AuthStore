// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAF1DtNw3fShNhz4yWL45z7-7IGwLGSLs",
    authDomain: "astro-auth-78bf3.firebaseapp.com",
    projectId: "astro-auth-78bf3",
    storageBucket: "astro-auth-78bf3.firebasestorage.app",
    messagingSenderId: "1080495226153",
    appId: "1:1080495226153:web:1969d5be80916415b10b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
    app,
    auth,
};