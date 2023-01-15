import { auth, provider, storage } from '../firebase';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import db from '../firebase';
import { collection, addDoc, orderBy, query, getDocs } from 'firebase/firestore';

import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from './actionType';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
})

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
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));

    if (payload.image != '') {
      const upload = uploadBytesResumable(
        ref(storage, `images/${payload.image.name}`),
        payload.image
      );
      upload.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === 'running') {
            console.log('progress ' + progress + '%');
          }
        },
        (error) => {
          console.log(error.code);
        },
        async () => {
          const downloadURL = await getDownloadURL(upload.snapshot.ref);
          try {
            const docRef = await addDoc(collection(db, 'users'), {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timestamp,
                image: payload.user.photoURL,
              },
              video: payload.video,
              sharedImg: downloadURL,
              comments: 0,
              description: payload.description,
            });
            dispatch(setLoadingStatus(false));
            // console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error('Error adding document: ', e);
          }
        }
      );
    } else if (payload.video) {
      try {
        const docRef = addDoc(collection(db, 'users'), {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: '',
          comments: 0,
          description: payload.description,
        });
        dispatch(setLoadingStatus(false));
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }; 
}

export function getArticlesAPI() {
  return (async (dispatch) => {
    let payload = [];
    const q = query(collection(db, 'users'), orderBy("actor.date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      payload.push(doc.data());
    });
    console.log(payload);
    dispatch(getArticles(payload));
  });
}

 