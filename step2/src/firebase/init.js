import firebase from 'firebase'
import firestore from 'fireabse/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDVG_noztZHe7nX8fRcYLpsJMHIPt5D5oA",
    authDomain: "vue-chat-8b216.firebaseapp.com",
    databaseURL: "https://vue-chat-8b216.firebaseio.com",
    projectId: "vue-chat-8b216",
    storageBucket: "vue-chat-8b216.appspot.com",
    messagingSenderId: "682217651882",
    appId: "1:682217651882:web:d8730bd133c865b8cfdad3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
