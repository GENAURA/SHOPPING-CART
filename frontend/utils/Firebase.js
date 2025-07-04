import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "shoppingcart1-7d360.firebaseapp.com",
  projectId: "shoppingcart1-7d360",
  storageBucket: "shoppingcart1-7d360.firebasestorage.app",
  messagingSenderId: "663237423952",
  appId: "1:663237423952:web:33b874ea5a066edef33255"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}
