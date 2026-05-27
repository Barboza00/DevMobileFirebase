import { initializeApp } from "firebase/app";

//Ajuste para autenticar e acessar o banco
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXyokZbQSBe3XynoLOMP9vMrjjP95BEKI",
  authDomain: "aulaquartadevmobile.firebaseapp.com",
  databaseURL: "https://aulaquartadevmobile.firebaseapp.com",//endereço do banco
  projectId: "aulaquartadevmobile",
  storageBucket: "aulaquartadevmobile.firebasestorage.app",
  messagingSenderId: "820898447281",
  appId: "1:820898447281:web:4a0ed66ee1816152868790",
  measurementId: "G-H75KJ43VCX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;