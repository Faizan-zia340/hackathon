
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-3XFngB_QJMejh0BpCHACL-h9zSW3Qr8",
    authDomain: "project-01-c6eec.firebaseapp.com",
    databaseURL: "https://project-01-c6eec-default-rtdb.firebaseio.com",
    projectId: "project-01-c6eec",
    storageBucket: "project-01-c6eec.appspot.com",
    messagingSenderId: "274542814987",
    appId: "1:274542814987:web:ff95e7d20ff91e7109e40e",
    measurementId: "G-JF9WF4952E"
  };

  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
