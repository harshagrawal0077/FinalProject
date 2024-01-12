import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyCzX9HjTdSnqA3kXzFZcqHJiZhVoBUQVkc",
  authDomain: "harsh1234-a839b.firebaseapp.com",
  projectId: "harsh1234-a839b",
  storageBucket: "harsh1234-a839b.appspot.com",
  messagingSenderId: "740739429094",
  appId: "1:740739429094:web:7b2bc4432cb0ee1c484127",
  measurementId: "G-NJ58ZGB31X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
