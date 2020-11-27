import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBA5iFDJRi8J3cFmbat-TLoDmNvvv0ugro",
    authDomain: "tiktok-clone-582d1.firebaseapp.com",
    databaseURL: "https://tiktok-clone-582d1.firebaseio.com",
    projectId: "tiktok-clone-582d1",
    storageBucket: "tiktok-clone-582d1.appspot.com",
    messagingSenderId: "498239270587",
    appId: "1:498239270587:web:6cb3974e4e42f9c2b1839e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db