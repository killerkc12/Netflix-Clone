import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvl8F_EOVcPwnMlvu6NLJSR1uoZgv7v2s",
    authDomain: "netflix-clone-ff13a.firebaseapp.com",
    projectId: "netflix-clone-ff13a",
    storageBucket: "netflix-clone-ff13a.appspot.com",
    messagingSenderId: "301834784856",
    appId: "1:301834784856:web:3170a67c7bc07aee903a2d"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const auth = getAuth(app);
  
  export { auth };
  export default db;