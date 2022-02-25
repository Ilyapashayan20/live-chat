import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBM6DZreuAhZL1P-oPnE5Quky5hG_19-xM",
  authDomain: "udemy-vue-firebase-sites-b43ea.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-b43ea",
  storageBucket: "udemy-vue-firebase-sites-b43ea.appspot.com",
  messagingSenderId: "172098222008",
  appId: "1:172098222008:web:7992d8df60cfc72a67014d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
