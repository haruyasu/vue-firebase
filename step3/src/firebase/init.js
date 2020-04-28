import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4wxUsAkWuCRPxuHt_MLOHK2EcUXThGx8",
    authDomain: "vue-geo-8d950.firebaseapp.com",
    databaseURL: "https://vue-geo-8d950.firebaseio.com",
    projectId: "vue-geo-8d950",
    storageBucket: "vue-geo-8d950.appspot.com",
    messagingSenderId: "1029739760787",
    appId: "1:1029739760787:web:2bd844b1a1af82bc47d166"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
