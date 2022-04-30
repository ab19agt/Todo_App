/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAOjaYoaERxyCMLnrooekPhDHtGgi8rNs",
  authDomain: "todoapp-ebec4.firebaseapp.com",
  projectId: "todoapp-ebec4",
  storageBucket: "todoapp-ebec4.appspot.com",
  messagingSenderId: "1018983125851",
  appId: "1:1018983125851:web:f35b1d5c6ff28639e7407e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
//const app = initializeApp(firebaseConfig);
