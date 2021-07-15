import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBFavxO_MWb2v389EighgPoKIeiiMgCn-8",
    authDomain: "note-ui-ff924.firebaseapp.com",
    databaseURL: "https://note-ui-ff924-default-rtdb.firebaseio.com",
    projectId: "note-ui-ff924",
    storageBucket: "note-ui-ff924.appspot.com",
    messagingSenderId: "450792904420",
    appId: "1:450792904420:web:07d5693ff8be8d4e3bbef1"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.database();
