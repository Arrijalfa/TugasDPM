import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4c1Bdq-bTSaYePwPpXFy68C6ZgjkulB4",
  authDomain: "signal-clone-yt-build-70f2b.firebaseapp.com",
  projectId: "signal-clone-yt-build-70f2b",
  storageBucket: "signal-clone-yt-build-70f2b.appspot.com",
  messagingSenderId: "949416710912",
  appId: "1:949416710912:web:18ce220012edaf58b819e5"
};

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth}