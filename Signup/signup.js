import { app, auth } from "../firebase.mjs";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";




const btn2 = document.getElementById("btn2")
const alerts = document.getElementById("alert")

btn2.addEventListener('click', (event) => {
  event.preventDefault();
  let email = document.getElementById("C-Email").value;
  let password = document.getElementById("C-password").value;




  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alerts.style.color = "green";
      alerts.innerHTML = `<b>account created<b/>`
      setTimeout(() => {
        window.location.href = "../Login/login.html"
      }, 1000)
    })
    .catch((error) => {
      alerts.style.color = "red";
      alerts.innerHTML = `${errorMessage}`
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
});