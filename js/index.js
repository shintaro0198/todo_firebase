      import { app } from "./firebase.js";
      import { getDatabase, ref, child, get, push, update, remove } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
      import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
      const db = getDatabase(app);
      const dbRef = ref(getDatabase());
      const auth = getAuth();
      const text = document.getElementById('text');
      const btn = document.getElementById('button');
      const list = document.getElementById('list');
      let uid = "";
      const promise = new Promise((resolve)=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          uid = user.uid;
          console.log(uid);
          resolve()
        } else {
          // User is signed out
          // ...
        }
      });
      })
      const getList = () => {
        get(child(dbRef, `users/${uid}/posts/`)).then((snapshot) => {
          if (snapshot.exists()) {
            let posts = snapshot.val();
            for (let postId in posts) {
              let content = document.createElement('div');
              let newText = document.createElement('p');
              let deleteButton = document.createElement('p');
              deleteButton.classList.add('delete-button');
              deleteButton.setAttribute('id', postId);
              newText.innerHTML = posts[postId];
              deleteButton.innerHTML = '完了';
              content.appendChild(newText);
              content.appendChild(deleteButton);
              list.appendChild(content);
            }
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
          console.log('error');
        });
      list.addEventListener('click', (e) => {
        remove(ref(db, `users/${uid}/posts/${e.target.id}`));
        location.reload();
      })
      };
      promise.then(getList);
      btn.addEventListener('click', () => {
        // Get a key for a new Post.
        const newPostKey = push(child(ref(db), 'posts')).key;
        console.log(newPostKey);
        const postData = text.value;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates[`users/${uid}/posts/` + newPostKey] = postData;
        update(ref(db), updates);
        text.value = "";
        location.reload();
      })