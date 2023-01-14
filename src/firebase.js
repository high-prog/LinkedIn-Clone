import firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyCixc2SJ64ykjrlEMYNGZGcCSgUr4rcXAc',
  authDomain: 'linkedin-clone-420.firebaseapp.com',
  projectId: 'linkedin-clone-420',
  storageBucket: 'linkedin-clone-420.appspot.com',
  messagingSenderId: '189956436809',
  appId: '1:189956436809:web:1147eb81eac0f8220c6098',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
