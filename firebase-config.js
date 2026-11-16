import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Firebase'den aldığın bilgileri buradaki tırnakların içine yapıştır:
const firebaseConfig = {
    apiKey: "AIzaSyCCICW04_k8SMj1iDrkY_yTnr1K5z1NRwI",
    authDomain: "munomeral-6ea61.firebaseapp.com",
    projectId: "munomeral-6ea61",
    storageBucket: "munomeral-6ea61.firebasestorage.app",
    messagingSenderId: "371735806025",
    appId: "1:371735806025:web:5f7333fa99330713afbf98",
    measurementId: "G-PXLWY0KCGP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Sadece senin girebileceğin yönetim paneli için kendi Gmail adresini buraya yaz:
export const ADMIN_EMAIL = "baturmirza249@gmail.com";
