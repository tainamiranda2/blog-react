import { initializeApp } from "firebase/app";
import { getFiresStore } from 'firebase/firebase';
const firebaseConfig = {
  apiKey: "AIzaSyClF10IhbGo2xWddXveWICprtx9vGN9tmw",
  authDomain: "miniblog-react-fe493.firebaseapp.com",
  projectId: "miniblog-react-fe493",
  storageBucket: "miniblog-react-fe493.appspot.com",
  messagingSenderId: "485954335238",
  appId: "1:485954335238:web:1db9debe81c2fed1960987"
};

const app = initializeApp(firebaseConfig);

const db = getFiresStore(app)

export { db };