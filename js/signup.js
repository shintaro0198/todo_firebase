import { app } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
const auth = getAuth();
const email = document.getElementById('email');
const password = document.getElementById('password')
const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log('alpha')
    const user = userCredential.user;
    console.log(userCredential);
    console.log(user);
    window.location.href = '../html/index.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    console.log(email.value);
    console.log(password.value);
    // ..
  });
})

