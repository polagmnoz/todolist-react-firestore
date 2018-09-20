
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBeCxe5RUXEogsI_Zqd6igbmQvuJazYCe0",
    authDomain: "todolist-react-firestore.firebaseapp.com",
    databaseURL: "https://todolist-react-firestore.firebaseio.com",
    projectId: "todolist-react-firestore",
    storageBucket: "todolist-react-firestore.appspot.com",
    messagingSenderId: "601485435019"
  };
  
firebase.initializeApp(config);

  
const db = firebase.firestore();

export default db;