import { app, auth } from "./firebase.mjs";
import {signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { addDoc , collection,doc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 

const db=getFirestore(app);

const signout_btn = document.querySelector('#logout');

 signout_btn.addEventListener('click', ()=>{
    signOut(auth).then(()=>{
window.location.href="../Login/login.html"
    }).catch((error)=>{
        console.log("error",error);
        
    })
 })
 

// blog section code
const notify = document.querySelector(".notifi");
const add_post_btn = document.querySelector("#post_btn");


 async function   add_post(){
  const title = document.querySelector("#title").value;
  const post_content = document.querySelector("#post_content").value;
 

  

try {
  const docRef = await addDoc(collection(db, "user"), {
    
    Title:title,
    Post_Content : post_content,
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
 

    notify.innerHTML="Data Added"
    title = document.querySelector("#title").value="";
    Post_Content = document.querySelector("#post_content").value="";
  }



  add_post_btn.addEventListener('click', add_post)  
 

const blog =document.querySelector(".my_content")

  const querySnapshot = await getDocs(collection(db,  "user"));
  querySnapshot.forEach((doc) => {
    // doc.data() is n.ever undefined for query doc snapshots
    let data = doc.data();
    console.log("data=>",data);
    if(!data){
      blog.innerHTML = "<h1>Loading...</h1>"
    }else{

   
    
// <img src="..." class="card-img-top" alt="...">
    blog.innerHTML += `<div class="card row m-4" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${data.Title}</h5>
          <p class="card-text">${data.Post_Content}</p>
          <a href="#" class="btn btn-primary">Edit</a>
          <a href="#" class="btn btn-danger">Delete</a>
        </div>
      </div>`
    console.log(doc.id, " => ", doc.data());
  }
   });
 

