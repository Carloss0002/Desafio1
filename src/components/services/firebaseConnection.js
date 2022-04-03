import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyARbOS7UrTwiV-g_oBkYGyoGYDGTToEQJg",
  authDomain: "dot-desafio.firebaseapp.com",
  projectId: "dot-desafio",
  storageBucket: "dot-desafio.appspot.com",
  messagingSenderId: "8702988383",
  appId: "1:8702988383:web:533646c681916f42e60bea",
  measurementId: "G-G907829J9M"
};
if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);
}

export default firebase