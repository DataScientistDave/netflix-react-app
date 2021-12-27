import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC1SqW-HxX6cLS5qUwxGS4AtteTzMUb6t8",
  authDomain: "netflix-react-clone-45c78.firebaseapp.com",
  projectId: "netflix-react-clone-45c78",
  storageBucket: "netflix-react-clone-45c78.appspot.com",
  messagingSenderId: "835409567379",
  appId: "1:835409567379:web:9b40bf7a3a5371db013766",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
export { firebaseApp };
