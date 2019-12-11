import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB42So1vt3jDIA0d2rpJRrae9jBuQj2y3o",
    authDomain: "webform-25b14.firebaseapp.com",
    databaseURL: "https://webform-25b14.firebaseio.com",
    projectId: "webform-25b14",
    storageBucket: "webform-25b14.appspot.com",
    messagingSenderId: "680746689855",
    appId: "1:680746689855:web:bb02e8f9700a0fb6055f8a"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

