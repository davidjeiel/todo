// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxGGGHsH3JGtNYFJeQBLl87SZkGid2CeU",
  authDomain: "todo-vibbra.firebaseapp.com",
  projectId: "todo-vibbra",
  storageBucket: "todo-vibbra.appspot.com",
  messagingSenderId: "361178752387",
  appId: "1:361178752387:web:e2aef460fb96fc3b9482b6",
  measurementId: "G-2R222ZRKZK"
};

const app = initializeApp(firebaseConfig);

export {app};
