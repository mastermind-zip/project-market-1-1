
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, FieldValue, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC7WL65fyeoBLEJweVOEzVzksPepcmZ4VE",
    authDomain: "project-1-1-a333d.firebaseapp.com",
    projectId: "project-1-1-a333d",
    storageBucket: "project-1-1-a333d.appspot.com",
    messagingSenderId: "968838687295",
    appId: "1:968838687295:web:f7b2850b30242a488de68a"
  };
  
  const app = initializeApp(firebaseConfig)

  const projectAuth = getAuth(app)
  const projectFirestore = getFirestore(app)
  const timestamp = serverTimestamp

  export {projectAuth, projectFirestore, timestamp }