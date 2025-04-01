import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgfft_PI2AGyOZI_aPsp67_cOi2FE2rxg",
    authDomain: "project-final-bs-ch.firebaseapp.com",
    projectId: "project-final-bs-ch",
    storageBucket: "project-final-bs-ch.firebasestorage.app",
    messagingSenderId: "1010946848463",
    appId: "1:1010946848463:web:ab4d71e5e16834bfbba9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);