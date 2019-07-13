import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyC8qq6rPyIuuRCOAsXRldU3uNjdLVFaOsM",
  authDomain: "kxware-921f4.firebaseapp.com",
  databaseURL: "https://kxware-921f4.firebaseio.com",
  projectId: "kxware-921f4",
  storageBucket: "kxware-921f4.appspot.com",
  messagingSenderId: "593865257473",
  appId: "1:593865257473:web:8ccfbe640a359a38"
};
firebase.initializeApp(config);

//firebase.firestore().settings(settings);

export default firebase;
