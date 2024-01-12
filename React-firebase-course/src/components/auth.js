import { auth } from "../config/firebase";
import {
createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.location.href = "http://localhost:3000/";
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
   
    <div className="harshul">
      <div className="ha">
      <div id="logo"></div>
        <div className="ik">

          <h3 id="slogin">IITK-Courses Form</h3>



      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
        id="ok"/>
      
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        id="ok"/>
    <div id="remforget">

      <div id="rem">
     <input type="checkbox"/> 
        <h4>Remember Me</h4>
        </div> 
       

        </div>
      <button onClick={signIn} id="click"> Sign In</button>
       <hr id="line"/>
        </div>
      </div>
      </div>
    
  );
};