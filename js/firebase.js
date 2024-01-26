    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
    
    
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCl1a4JkwaX26ZzpfabVMgBEisGQhg0-Ww",
        authDomain: "todo-app-76683.firebaseapp.com",
        databaseURL: "https://todo-app-76683-default-rtdb.firebaseio.com",
        projectId: "todo-app-76683",
        storageBucket: "todo-app-76683.appspot.com",
        messagingSenderId: "542274110311",
        appId: "1:542274110311:web:16e19deaefdc2df720a5c2"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      export { app };
      // Initialize Realtime Database and get a reference to the service
      
      
      