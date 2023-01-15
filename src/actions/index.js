import { auth, provider, storage } from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut  } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 

import { SET_USER } from './actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        // console.log(payload.user);
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}


export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("user" + user);
        dispatch(setUser(user))
      }
    });
  };
}

export function signOutAPI(){
  return (dispatch) => {
    signOut(auth).then(() => {
      dispatch(setUser(null))
    }).catch((error) => {
      console.log(error.message);
    })
  }
}


export function postArticleAPI(payload){
  return (dispatch) => {
    if(payload.image != ''){
      const upload = uploadBytesResumable(ref(storage, `images/${payload.image.name}`), payload.image);
      upload.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if(snapshot.state === 'running'){
          console.log("progress " + progress + "%");
        }
      }, (error) => {
        console.log(error.code);
      }, async () => {
        const downloadURL = await getDownloadURL(upload.snapshot.ref);
        try {
          const docRef = await addDoc(collection(db, "users"), {
            actor:{
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          }
          );
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        
      });
    }
  }
}