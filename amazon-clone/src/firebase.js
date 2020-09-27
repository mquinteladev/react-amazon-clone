import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB1la0bOcpqNpUTmzBt_p6KCY27IDXfdFA",
    authDomain: "clone-dbfb3.firebaseapp.com",
    databaseURL: "https://clone-dbfb3.firebaseio.com",
    projectId: "clone-dbfb3",
    storageBucket: "clone-dbfb3.appspot.com",
    messagingSenderId: "935061001557",
    appId: "1:935061001557:web:56d0b6451ef7a8d6878bdc",
    measurementId: "G-LFW13M19XS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }