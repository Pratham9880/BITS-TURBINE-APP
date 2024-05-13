import { firebase} from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  import { getStorage } from 'firebase/storage';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDtmq2Jdnvs4v2ZOvOfbH32XxH2p5Y1E-8",
    authDomain: "solarpv-9a6a5.firebaseapp.com",
    projectId: "solarpv-9a6a5",
    storageBucket: "solarpv-9a6a5.appspot.com",
    messagingSenderId: "657484893363",
    appId: "1:657484893363:web:3e24f6a8554fae872534c6",
    measurementId: "G-7R6VK5MXX4"
  };

 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  
  
 