import firebase, { initializeApp, auth } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

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
const analytics = getAnalytics(app);
const auth = auth();

export { firebase, auth, analytics };