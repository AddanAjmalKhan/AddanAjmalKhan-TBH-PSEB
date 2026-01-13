import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH2xytUVpPMOyyaC4Sw0FGWp9N8fNaXzA",
  authDomain: "blood-heroes-admin-1.firebaseapp.com",
  projectId: "blood-heroes-admin-1",
  storageBucket: "blood-heroes-admin-1.appspot.com",
  messagingSenderId: "476159722248",
  appId: "1:476159722248:web:cb1df9e1c475842aae22bd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
