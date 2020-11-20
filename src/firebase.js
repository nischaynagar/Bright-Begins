import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAwyDsP1rMWnrfVEfbVN9XIYa3mIQICaZk",
    authDomain: "bright-75114.firebaseapp.com",
    databaseURL: "https://bright-75114.firebaseio.com",
    projectId: "bright-75114",
    storageBucket: "bright-75114.appspot.com",
    messagingSenderId: "866584780976",
    appId: "1:866584780976:web:4d277f45c0e9d145de5b75"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

