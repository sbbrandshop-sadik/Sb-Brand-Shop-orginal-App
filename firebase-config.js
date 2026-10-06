import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyATfts9BTmadU680YZvAOfedh1XQGan7Is",
    authDomain: "sb-brand-shop-426a4.firebaseapp.com",
    projectId: "sb-brand-shop-426a4",
    storageBucket: "sb-brand-shop-426a4.firebasestorage.app",
    messagingSenderId: "390467743569",
    appId: "1:390467743569:web:180caf9c8a50d094066d70"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Cloudinary Config
export const CLOUDINARY_CLOUD = "difqe10gj";
export const CLOUDINARY_PRESET = "sb brand shop";
