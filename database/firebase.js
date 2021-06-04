import firebase from 'firebase'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyCzCc6_kbAgpuWJoyHp24k4W5hW5J0dev8",
  authDomain: "juntasysegurasapp.firebaseapp.com",
  projectId: "juntasysegurasapp",
  storageBucket: "juntasysegurasapp.appspot.com",
  messagingSenderId: "327355800276",
  appId: "1:327355800276:web:d7cd2e48a7f302cfd57941"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

export default {
    firebase,
    db
}