import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firebsestore'

const firebaseConfig = {
    apiKey: "AIzaSyD61Z3m8TpOtdv5QHuhXgiKjgHi8uPFKh8",
    authDomain: "ecommerce-app-9f330.firebaseapp.com",
    databaseURL: "https://ecommerce-app-9f330-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ecommerce-app-9f330",
    storageBucket: "ecommerce-app-9f330.appspot.com",
    messagingSenderId: "980903915151",
    appId: "1:980903915151:web:501bcf939cecf1423ecafa",
    measurementId: "G-VCPWMX4TD0"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)