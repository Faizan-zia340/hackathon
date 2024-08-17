import { app, auth } from "../firebase.mjs";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


let bttn2 =document.getElementById('bttn2')
bttn2.addEventListener('click',()=>{
  window.location.href = '../Signup/signup.html';
})

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", (event) => {
  event.preventDefault()
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;



  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setTimeout(() => {
        window.location.href = '../index.html'
      }, 1000);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})
