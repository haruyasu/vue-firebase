import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqFxgCcn8eUWWarDA75QK51UGj-djcca0",
    authDomain: "vue-firebase-step1.firebaseapp.com",
    databaseURL: "https://vue-firebase-step1.firebaseio.com",
    projectId: "vue-firebase-step1",
    storageBucket: "vue-firebase-step1.appspot.com",
    messagingSenderId: "890765013836",
    appId: "1:890765013836:web:b40e13b61574c4ed6f15e9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firebase database

export default firebaseApp.firestore()
