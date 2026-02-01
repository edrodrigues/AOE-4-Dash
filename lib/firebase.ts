import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your Firebase Configuration
// You can find this in the Firebase Console -> Project Settings -> General
const firebaseConfig = {
    apiKey: "AIzaSyBs15tX_VBrS9IvPN2rbJAbB9nRkDijNgk",
    authDomain: "aoe4-dashboard.firebaseapp.com",
    projectId: "aoe4-dashboard",
    storageBucket: "aoe4-dashboard.firebasestorage.app",
    messagingSenderId: "1064938687552",
    appId: "1:1064938687552:web:18becedde33a6557c4a3a5",
    measurementId: "G-57TVF82TDK"
};

// Initialize Firebase (Singleton pattern)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
