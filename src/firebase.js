
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: 'AIzaSyCixc2SJ64ykjrlEMYNGZGcCSgUr4rcXAc',
  authDomain: 'linkedin-clone-420.firebaseapp.com',
  projectId: 'linkedin-clone-420',
  storageBucket: 'linkedin-clone-420.appspot.com',
  messagingSenderId: '189956436809',
  appId: '1:189956436809:web:1147eb81eac0f8220c6098',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const auth =getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
